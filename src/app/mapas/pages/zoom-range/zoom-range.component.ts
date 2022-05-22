import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styleUrls: ['./zoom-range.component.css'],
})
export class ZoomRangeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('mapa') devMapa!: ElementRef;

  mapa!: mapboxgl.Map;
  zoom: number = 13;
  center: [number, number] = [-48.01888132710939, -15.834124159165265];

  constructor() {}

  ngOnDestroy(): void {
   this.mapa.off('move', () => {});
   this.mapa.off('zoom', () => {});
   this.mapa.off('zoomend', () => {});
  }

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.devMapa.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoom,
    });

    this.mapa.on('zoom', (ev) => {
      const zoomAtual = this.mapa.getZoom();
      this.zoom = zoomAtual;
    });

    this.mapa.on('zoomend', (ev) => {
      if (this.mapa.getZoom() > 18) {
        this.mapa.zoomTo(18);
      }
    });

    this.mapa.on('move', (ev) => {
      const target = ev.target;
     this.center[0] = target.getCenter().lng;
     this.center[1] = target.getCenter().lat;
        console.log(target);

    });
  }

  ngOnInit(): void {}

  zoomIn() {
    this.mapa.zoomIn({
      duration: 3,
      animate: true,
    });
    this.zoom = this.mapa.getZoom();
  }

  zoomOut() {
    this.mapa.zoomOut({
      duration: 3,
      animate: true,
    });

    this.zoom = this.mapa.getZoom();
  }

  zoomUpdate(value: string) {
    this.mapa.zoomTo(parseFloat(value));
  }
}
