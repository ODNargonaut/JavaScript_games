/* Отвечает за создание частиц */


class Particle
{
  boxParticles;

  speed = 0.6;


  /* ... */
  constructor()
  {
    this.boxParticles = new THREE.Object3D();
    this.boxParticles.name = "boxParticles";

    scene.scene.add(this.boxParticles)
  }

  /* /// */
  createParticle()
  {
    let geometry = new THREE.TetrahedronGeometry(3, 0);
    let material = new THREE.MeshPhongMaterial(
      {
        color: 0x009999,
        shininess: 0,               // блеск
        specular: 0xffffff,         // зеркальный
        shading: THREE.FlatShading  // затенение
      }
    );

    let particle = new THREE.Mesh(geometry, material);
    particle.name = "particle";
    
    return particle;
  }

  /* /// */
  generation(pos, quantity, clr, sz)
  {
    for (let i = 0; i < quantity; ++i)
    {
      let particle = this.createParticle();

      particle.visible = true;

      particle.position.x = pos.x;
      particle.position.y = pos.y;

      this.boxParticles.add(particle);

      this.explode(particle, pos, clr, sz);
    }
  }

  /* частица взрывается */
  explode(particle, pos, clr, sz)
  {
    let _p = particle.parent
    
    particle.material.color = new THREE.Color(clr);
    particle.material.needUpdate = true;  // необходимо обновить
    particle.scale.set(sz, sz, sz);
    
    let x = pos.x + (-1 + Math.random() * 2) * 50;
    let y = pos.y + (-1 + Math.random() * 2) * 50;

    let speed = this.speed + Math.random() * 0.2;

    TweenMax.to(particle.rotation, speed, {x: Math.random()*12, y: Math.random()*12});
    TweenMax.to(particle.scale, speed, {x: 0.1, y: 0.1, z: 0.1});
    TweenMax.to(particle.position, speed, 
      {
        x: x, y: y, 
        delay: Math.random()*0.1, 
        ease: Power2.easeOut,
        onComplete: function() 
        {
          if (_p)
            _p.remove(particle);
        }
      });
  }

  /* /// */
  deleteObsts()
  {
    this.boxParticles.remove(...this.boxParticles.children);
  }

  /* /// */
  reset()
  {
    this.deleteObsts();
  }
}