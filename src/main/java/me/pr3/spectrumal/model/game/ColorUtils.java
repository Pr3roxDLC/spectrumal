package me.pr3.spectrumal.model.game;

import java.awt.*;
import java.util.Random;

public class ColorUtils {

    public static Color generateFullySaturatedColor() {
        Random random = new Random();
        // Possible permutations: which channel is min (0), which is max (255), which is variable
        int[][] channelOrders = {
                {0, 1, 2},
                {0, 2, 1},
                {1, 0, 2},
                {1, 2, 0},
                {2, 0, 1},
                {2, 1, 0},
        };

        // Pick one permutation randomly
        int[] order = channelOrders[random.nextInt(channelOrders.length)];

        // Generate random value for the "middle" (variable) channel
        int variable = random.nextInt(256);

        // Construct RGB array
        int[] rgb = new int[3];
        rgb[order[0]] = 0;         // One channel at 0
        rgb[order[1]] = 255;       // One channel at 255
        rgb[order[2]] = variable;  // One channel in [0,255]

        return new Color(rgb[0], rgb[1], rgb[2]);
    }
}
