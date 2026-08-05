export class Vector2 {
    constructor(
      public x: number,
      public y: number
    ) {}
  
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
  }
  