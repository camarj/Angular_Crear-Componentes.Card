export class Organizacion {
  nombre: String;
  descripcion: String;

  constructor(organizacion: string, descripcion: string) {
    this.nombre = organizacion;
    this.descripcion = descripcion;
  }
}
