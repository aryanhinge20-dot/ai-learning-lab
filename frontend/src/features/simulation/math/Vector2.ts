export class Vector2 {
    public x: number;
    public y: number;
  
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  
    add(other: Vector2): Vector2 {
      return new Vector2(
        this.x + other.x,
        this.y + other.y
      );
    }
  
    subtract(other: Vector2): Vector2 {
      return new Vector2(
        this.x - other.x,
        this.y - other.y
      );
    }
  
    multiply(value: number): Vector2 {
      return new Vector2(
        this.x * value,
        this.y * value
      );
    }
  
  clone(): Vector2 {
    return new Vector2(this.x, this.y);
  }

}