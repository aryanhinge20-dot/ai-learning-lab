import { SimulationObject } from "../objects/SimulationObject";
import { Vector2 } from "../math/Vector2";

export class PhysicsWorld {
  gravity: Vector2;
  objects: SimulationObject[];

  constructor() {
    this.gravity = new Vector2(0, 9.81);
    this.objects = [];
  }

  addObject(object: SimulationObject) {
    this.objects.push(object);
  }

  update(deltaTime: number) {
    for (const object of this.objects) {
      object.update(deltaTime);
    }
  }
}