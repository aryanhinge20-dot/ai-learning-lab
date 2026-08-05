import { Vector2 } from "@/features/simulation/math/Vector2";

export class SimulationObject {
  position: Vector2;
  velocity: Vector2;
  acceleration: Vector2;
  mass: number;
  radius: number;

  constructor({
    position,
    velocity,
    acceleration,
    mass,
    radius,
  }: {
    position: Vector2;
    velocity: Vector2;
    acceleration: Vector2;
    mass: number;
    radius: number;
  }) {
    this.position = position;
    this.velocity = velocity;
    this.acceleration = acceleration;
    this.mass = mass;
    this.radius = radius;
  }

  update(deltaTime: number) {
    this.velocity = this.velocity.add(
      this.acceleration.multiply(deltaTime)
    );
  
    this.position = this.position.add(
      this.velocity.multiply(deltaTime)
    );
  }
}