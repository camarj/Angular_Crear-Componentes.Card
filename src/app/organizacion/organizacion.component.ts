import { Component, OnInit } from "@angular/core";
import { Organizacion } from "../models/organizacion";

@Component({
  selector: "app-organizacion",
  templateUrl: "./organizacion.component.html",
  styleUrls: ["./organizacion.component.css"]
})
export class OrganizacionComponent implements OnInit {
  organizaciones: Organizacion[];

  constructor() {
    this.organizaciones = [new Organizacion("Dysiscom", "Dysiscom-cloud")];
  }

  ngOnInit() {}

  addOrg(nombre: HTMLInputElement, descripcion: HTMLTextAreaElement) {
    this.organizaciones.push(new Organizacion(nombre.value, descripcion.value));
    nombre.value = "";
    descripcion.value = "";
    return false;
  }
}
