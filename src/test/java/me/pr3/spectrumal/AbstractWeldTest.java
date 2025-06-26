package me.pr3.spectrumal;

import com.google.common.reflect.ClassPath;
import jakarta.enterprise.context.RequestScoped;
import org.jboss.weld.bootstrap.spi.BeanDiscoveryMode;
import org.jboss.weld.junit5.EnableWeld;
import org.jboss.weld.junit5.WeldInitiator;
import org.jboss.weld.junit5.WeldSetup;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

import java.io.IOException;
import java.util.Arrays;
import java.util.Set;
import java.util.stream.Stream;

/**
 * @author tim
 * This is the base class for all of our tests that require weld to work, by extending this class weld will be
 * automatically be enabled and configurated
 */
@EnableWeld
@ExtendWith(MockitoExtension.class)
public abstract class AbstractWeldTest {
    @WeldSetup
    WeldInitiator weldInitiator = buildWeldInitiator();

    /**
     * Override to provide mock producers.
     */
    protected Class<?>[] getMockProducerClasses() {
        return new Class<?>[0];
    }

    /**
     * Override to exclude real classes from discovery (e.g. real GameStateBroadcaster).
     */
    protected Set<Class<?>> getExcludedBeanClasses() {
        return Set.of();
    }

    /**
     * Builds the WeldInitiator.
     */
    protected WeldInitiator buildWeldInitiator() {
        Set<Class<?>> excluded = getExcludedBeanClasses();

        // 👇 Apply filtering to exclude classes
        Class<?>[] appBeans = Arrays.stream(getClasses())
                .filter(c -> !excluded.contains(c))
                .toArray(Class[]::new);

        Class<?>[] mocks = getMockProducerClasses();

        Class<?>[] allBeans = Stream.concat(Arrays.stream(appBeans), Arrays.stream(mocks))
                .toArray(Class[]::new);

        return WeldInitiator.from(WeldInitiator.createWeld()
                        .addBeanClasses(allBeans)
                        .setBeanDiscoveryMode(BeanDiscoveryMode.ANNOTATED))
                .activate(RequestScoped.class)
                .build();
    }
    protected static Class<?>[] getClasses() {
        try {
            return ClassPath.from(AbstractWeldTest.class.getClassLoader()).getAllClasses().stream()
                    .filter(ci -> ci.getPackageName().startsWith("me.pr3.spectrumal"))
                    .map(ClassPath.ClassInfo::load).toList().toArray(new Class<?>[]{});
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
