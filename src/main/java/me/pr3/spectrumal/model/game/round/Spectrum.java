package me.pr3.spectrumal.model.game.round;

import me.pr3.spectrumal.model.game.core.Dimension;

import java.util.List;

public class Spectrum {
    private List<Dimension> dimensions;
    private String header;

    public Spectrum() {
    }

    public Spectrum(List<Dimension> dimensions, String header) {
        this.dimensions = dimensions;
        this.header = header;
    }

    public List<Dimension> getDimensions() {
        return dimensions;
    }

    public void setDimensions(List<Dimension> dimensions) {
        this.dimensions = dimensions;
    }

    public String getHeader() {
        return header;
    }

    public void setHeader(String header) {
        this.header = header;
    }
}
