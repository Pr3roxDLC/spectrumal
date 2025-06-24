package me.pr3.spectrumal;

import com.google.common.reflect.ClassPath;
import jakarta.enterprise.context.RequestScoped;
import org.jboss.weld.bootstrap.spi.BeanDiscoveryMode;
import org.jboss.weld.junit5.EnableWeld;
import org.jboss.weld.junit5.WeldInitiator;
import org.jboss.weld.junit5.WeldSetup;

import java.io.IOException;

/**
 * @author tim
 * This is the base class for all of our tests that require weld to work, by extending this class weld will be
 * automatically be enabled and configurated
 */
@EnableWeld
public abstract class AbstractWeldTest {
    @WeldSetup
    WeldInitiator weldInitiator = WeldInitiator.from(WeldInitiator.createWeld()
                    .addBeanClasses(getClasses())
                    .setBeanDiscoveryMode(BeanDiscoveryMode.ANNOTATED)
            ).activate(RequestScoped.class)
            .build();

    private static Class<?>[] getClasses() {
        try {
            return ClassPath.from(AbstractWeldTest.class.getClassLoader()).getAllClasses().stream()
                    .filter(ci -> ci.getPackageName().startsWith("me.pr3.spectrumal"))
                    .map(ClassPath.ClassInfo::load).toList().toArray(new Class<?>[]{});
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
