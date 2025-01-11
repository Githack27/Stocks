import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  ViewChild,
  ElementRef, Inject, PLATFORM_ID
} from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-gltf-viewer',
  standalone: true,
  imports: [],
  templateUrl: './gltf-viewer.component.html',
  styleUrls: ['./gltf-viewer.component.css']
})
export class GltfViewerComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas', {static: false}) private canvasRef!: ElementRef;
  @Input() public fieldOfView: number = 1;
  @Input('nearClipping') public nearClippingPane: number = 1;
  @Input('farClipping') public farClippingPane: number = 10000;

  private camera!: THREE.PerspectiveCamera;
  private controls!: OrbitControls;
  private ambientLight!: THREE.AmbientLight;
  private model: any;
  private directionalLight!: THREE.DirectionalLight;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private loaderGLTF = new GLTFLoader();
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;

  /**
   *create controls
   *
   * @private
   * @memberof ModelComponent
   */
  private createControls = () => {
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('canvas') as HTMLCanvasElement | undefined,
      antialias: true,
      alpha: true,
    });

    this.scene.background = null;

    renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    this.controls = new OrbitControls(this.camera, renderer.domElement);
    this.controls.enableZoom = true;
    this.controls.enablePan = true;
    this.controls.update();
  };

  /**
   * Create the scene
   *
   * @private
   * @memberof CubeComponent
   */
  private createScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xffffff);
    this.loaderGLTF.load('../../../../assets/Graphics/GLTF/adamHead/adamHead.gltf', (gltf: GLTF) => {
      this.model = gltf.scene.children[0];
      const textureLoader = new THREE.TextureLoader();
      const textures: { [key: string]: THREE.Texture } = {
        Adam_Head_a: textureLoader.load('../../../../assets/Graphics/GLTF/adamHead/Textures/Adam_Head_a.jpg'),
        Adam_Head_n: textureLoader.load('../../../../assets/Graphics/GLTF/adamHead/Textures/Adam_Head_n.jpg'),
        Adam_Head_o: textureLoader.load('../../../../assets/Graphics/GLTF/adamHead/Textures/Adam_Head_o.jpg'),
        Adam_Head_sg: textureLoader.load('../../../../assets/Graphics/GLTF/adamHead/Textures/Adam_Head_sg.png'),
        Adam_Torso_a: textureLoader.load('../../../../assets/Graphics/GLTF/adamHead/Textures/Adam_Torso_a.jpg'),
        Adam_Torso_n: textureLoader.load('../../../../assets/Graphics/GLTF/adamHead/Textures/Adam_Torso_n.jpg'),
        Adam_Torso_o: textureLoader.load('../../../../assets/Graphics/GLTF/adamHead/Textures/Adam_Torso_o.jpg'),
        Adam_Torso_sg: textureLoader.load('../../../../assets/Graphics/GLTF/adamHead/Textures/Adam_Torso_sg.png'),
        AdamMonitor: textureLoader.load('../../../../assets/Graphics/GLTF/adamHead/Textures/AdamMonitor.jpg'),
      };

      const textureMappings: { [key: string]: string } = {
        'Adam_Head_a': 'Adam_Head_a',
        'Adam_Head_n': 'Adam_Head_n',
        'Adam_Head_o': 'Adam_Head_o',
        'Adam_Head_sg': 'Adam_Head_sg',
        'Adam_Torso_a': 'Adam_Torso_a',
        'Adam_Torso_n': 'Adam_Torso_n',
        'Adam_Torso_o': 'Adam_Torso_o',
        'Adam_Torso_sg': 'Adam_Torso_sg',
        'AdamMonitor': 'AdamMonitor',
      };

      this.model.traverse((child: any) => {
        if (child.isMesh) {
          for (const [key, textureKey] of Object.entries(textureMappings)) {
            if (child.name.includes(key)) {
              child.material.map = textures[textureKey];
              child.material.needsUpdate = true;
              break;
            }
          }
        }
      });
      this.scene.add(this.model);
    });

    let aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPane,
      this.farClippingPane
    );
    this.camera.position.x = -80;
    this.camera.position.y = 50;
    this.camera.position.z = -200;
    this.ambientLight = new THREE.AmbientLight(0xffffff);
    this.scene.add(this.ambientLight);
    this.directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    this.directionalLight.position.set(0, 1, 0);
    this.scene.add(this.directionalLight);
  }

  private getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  /**
   * Start the rendering loop
   *
   * @private
   * @memberof CubeComponent
   */
  private startRenderingLoop() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    let component: GltfViewerComponent = this;

    (function render() {
      component.renderer.render(component.scene, component.camera);
      requestAnimationFrame(render);
    })();
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
    this.createScene();
    this.startRenderingLoop();
    this.createControls();
  }
}
}
