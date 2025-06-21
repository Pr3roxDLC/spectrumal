package me.pr3.spectrumal.model.game.core;

public class Point {
    public float dim1;
    public float dim2;

    public Point() {
    }

    public Point(float dim1, float dim2) {
        this.dim1 = dim1;
        this.dim2 = dim2;
    }

    public float getDim1() {
        return dim1;
    }

    public void setDim1(float dim1) {
        this.dim1 = dim1;
    }

    public float getDim2() {
        return dim2;
    }

    public void setDim2(float dim2) {
        this.dim2 = dim2;
    }
}
