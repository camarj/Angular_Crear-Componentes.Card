import { Component, OnInit, Input } from "@angular/core";
import { Organizacion } from "../models/organizacion";

@Component({
  selector: "app-organizaciones",
  templateUrl: "./organizaciones.component.html",
  styleUrls: ["./organizaciones.component.css"]
})
export class OrganizacionesComponent implements OnInit {
  @Input() organizacion: Organizacion;

  constructor() {}

  ngOnInit() {}
}
