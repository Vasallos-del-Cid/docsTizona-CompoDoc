'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">front-tizona documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AcercaModule.html" data-type="entity-link" >AcercaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AcercaModule-c7a2d10b91aca8d5add357362360f5788c2b746375fdbc2dc7cd31510c123c7644effa5c70f1b7ed71f4a939cd947bc4ab9be87bd3135820447d4bbe4e013ce1"' : 'data-target="#xs-components-links-module-AcercaModule-c7a2d10b91aca8d5add357362360f5788c2b746375fdbc2dc7cd31510c123c7644effa5c70f1b7ed71f4a939cd947bc4ab9be87bd3135820447d4bbe4e013ce1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AcercaModule-c7a2d10b91aca8d5add357362360f5788c2b746375fdbc2dc7cd31510c123c7644effa5c70f1b7ed71f4a939cd947bc4ab9be87bd3135820447d4bbe4e013ce1"' :
                                            'id="xs-components-links-module-AcercaModule-c7a2d10b91aca8d5add357362360f5788c2b746375fdbc2dc7cd31510c123c7644effa5c70f1b7ed71f4a939cd947bc4ab9be87bd3135820447d4bbe4e013ce1"' }>
                                            <li class="link">
                                                <a href="components/ContactoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InfoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AcercaRoutingModule.html" data-type="entity-link" >AcercaRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-251d0b4d1e753fa82b961df7b20555e95f258a2c1bcdc5ddc8a7f917b4c3472f46ecb09547c6930d321a29ed71a24e93bf8fecea67a3c9904c26042e8c8fc3a2"' : 'data-target="#xs-components-links-module-AppModule-251d0b4d1e753fa82b961df7b20555e95f258a2c1bcdc5ddc8a7f917b4c3472f46ecb09547c6930d321a29ed71a24e93bf8fecea67a3c9904c26042e8c8fc3a2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-251d0b4d1e753fa82b961df7b20555e95f258a2c1bcdc5ddc8a7f917b4c3472f46ecb09547c6930d321a29ed71a24e93bf8fecea67a3c9904c26042e8c8fc3a2"' :
                                            'id="xs-components-links-module-AppModule-251d0b4d1e753fa82b961df7b20555e95f258a2c1bcdc5ddc8a7f917b4c3472f46ecb09547c6930d321a29ed71a24e93bf8fecea67a3c9904c26042e8c8fc3a2"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ArchivosModule.html" data-type="entity-link" >ArchivosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ArchivosModule-b76c2054d6acb46d666984d1f9b4ab7d11feb4ec4d580f0661c980ed5eb39f882597f6f7111b584baa24dd88327574957824a9ab8e09d4362affa10f4b53efa1"' : 'data-target="#xs-components-links-module-ArchivosModule-b76c2054d6acb46d666984d1f9b4ab7d11feb4ec4d580f0661c980ed5eb39f882597f6f7111b584baa24dd88327574957824a9ab8e09d4362affa10f4b53efa1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ArchivosModule-b76c2054d6acb46d666984d1f9b4ab7d11feb4ec4d580f0661c980ed5eb39f882597f6f7111b584baa24dd88327574957824a9ab8e09d4362affa10f4b53efa1"' :
                                            'id="xs-components-links-module-ArchivosModule-b76c2054d6acb46d666984d1f9b4ab7d11feb4ec4d580f0661c980ed5eb39f882597f6f7111b584baa24dd88327574957824a9ab8e09d4362affa10f4b53efa1"' }>
                                            <li class="link">
                                                <a href="components/ArchivoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ArchivoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ArchivosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ArchivosComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DocumentosModule.html" data-type="entity-link" >DocumentosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DocumentosModule-e3273afaf2af1bc553901eb33446672e6758e9b54285460520218d05e306cf8cd7bd05cd134d666fb52014ca0469734fccbc88c08cc0d2f7c456f429cff593bb"' : 'data-target="#xs-components-links-module-DocumentosModule-e3273afaf2af1bc553901eb33446672e6758e9b54285460520218d05e306cf8cd7bd05cd134d666fb52014ca0469734fccbc88c08cc0d2f7c456f429cff593bb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DocumentosModule-e3273afaf2af1bc553901eb33446672e6758e9b54285460520218d05e306cf8cd7bd05cd134d666fb52014ca0469734fccbc88c08cc0d2f7c456f429cff593bb"' :
                                            'id="xs-components-links-module-DocumentosModule-e3273afaf2af1bc553901eb33446672e6758e9b54285460520218d05e306cf8cd7bd05cd134d666fb52014ca0469734fccbc88c08cc0d2f7c456f429cff593bb"' }>
                                            <li class="link">
                                                <a href="components/DocumentoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DocumentoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DocumentosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DocumentosComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DocumentosRoutingModule.html" data-type="entity-link" >DocumentosRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EsqueletoModule.html" data-type="entity-link" >EsqueletoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EsqueletoModule-d76bf98b69e7a2451d2af276a2b798e5f45247c8b5b5d8fb56175bb85632ddc7a6a09a4f77e69ceb61eb5c5454e60004c3375b34e89d0637f920cb007b6035f6"' : 'data-target="#xs-components-links-module-EsqueletoModule-d76bf98b69e7a2451d2af276a2b798e5f45247c8b5b5d8fb56175bb85632ddc7a6a09a4f77e69ceb61eb5c5454e60004c3375b34e89d0637f920cb007b6035f6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EsqueletoModule-d76bf98b69e7a2451d2af276a2b798e5f45247c8b5b5d8fb56175bb85632ddc7a6a09a4f77e69ceb61eb5c5454e60004c3375b34e89d0637f920cb007b6035f6"' :
                                            'id="xs-components-links-module-EsqueletoModule-d76bf98b69e7a2451d2af276a2b798e5f45247c8b5b5d8fb56175bb85632ddc7a6a09a4f77e69ceb61eb5c5454e60004c3375b34e89d0637f920cb007b6035f6"' }>
                                            <li class="link">
                                                <a href="components/CuerpoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CuerpoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EncabezadoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EncabezadoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EsqueletoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EsqueletoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoEncontradoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NoEncontradoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PieComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PieComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FichasModule.html" data-type="entity-link" >FichasModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FichasModule-f64c1cf62254402616ac994bdc582920cacc9bbb2b68f861c0574ca3fb209c3331371418d0670057b3827aff1f2f07963db7467ef74028592af3e449be808979"' : 'data-target="#xs-components-links-module-FichasModule-f64c1cf62254402616ac994bdc582920cacc9bbb2b68f861c0574ca3fb209c3331371418d0670057b3827aff1f2f07963db7467ef74028592af3e449be808979"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FichasModule-f64c1cf62254402616ac994bdc582920cacc9bbb2b68f861c0574ca3fb209c3331371418d0670057b3827aff1f2f07963db7467ef74028592af3e449be808979"' :
                                            'id="xs-components-links-module-FichasModule-f64c1cf62254402616ac994bdc582920cacc9bbb2b68f861c0574ca3fb209c3331371418d0670057b3827aff1f2f07963db7467ef74028592af3e449be808979"' }>
                                            <li class="link">
                                                <a href="components/BuscadorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BuscadorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FichaCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FichaCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FichaCompletaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FichaCompletaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormularioFichaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormularioFichaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListadofichasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListadofichasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ValidaFichaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ValidaFichaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ValidadorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ValidadorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FichasRoutingModule.html" data-type="entity-link" >FichasRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FichasvipModule.html" data-type="entity-link" >FichasvipModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FichasvipModule-16f5dd5c9aed35d340753503b2d08fcd7bef6987008db66cbf813593ddf3fc19749748ffb10ebcbc1b2c4ff181303c6030fcc9477626fa5578ee2ce61600bf85"' : 'data-target="#xs-components-links-module-FichasvipModule-16f5dd5c9aed35d340753503b2d08fcd7bef6987008db66cbf813593ddf3fc19749748ffb10ebcbc1b2c4ff181303c6030fcc9477626fa5578ee2ce61600bf85"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FichasvipModule-16f5dd5c9aed35d340753503b2d08fcd7bef6987008db66cbf813593ddf3fc19749748ffb10ebcbc1b2c4ff181303c6030fcc9477626fa5578ee2ce61600bf85"' :
                                            'id="xs-components-links-module-FichasvipModule-16f5dd5c9aed35d340753503b2d08fcd7bef6987008db66cbf813593ddf3fc19749748ffb10ebcbc1b2c4ff181303c6030fcc9477626fa5578ee2ce61600bf85"' }>
                                            <li class="link">
                                                <a href="components/FichasvipComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FichasvipComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FichavipComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FichavipComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalFichaVipComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModalFichaVipComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FichasvipRoutingModule.html" data-type="entity-link" >FichasvipRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FormulariosDinamicosModule.html" data-type="entity-link" >FormulariosDinamicosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FormulariosDinamicosModule-6fbaf400d09b4a7a5378e3859b894b22dcb17bdca482c0074fc257465bedf01e7d00b3b9baf3b31598029f50753f32535f0b1976a54b8a4af7c181fe4dcea618"' : 'data-target="#xs-components-links-module-FormulariosDinamicosModule-6fbaf400d09b4a7a5378e3859b894b22dcb17bdca482c0074fc257465bedf01e7d00b3b9baf3b31598029f50753f32535f0b1976a54b8a4af7c181fe4dcea618"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormulariosDinamicosModule-6fbaf400d09b4a7a5378e3859b894b22dcb17bdca482c0074fc257465bedf01e7d00b3b9baf3b31598029f50753f32535f0b1976a54b8a4af7c181fe4dcea618"' :
                                            'id="xs-components-links-module-FormulariosDinamicosModule-6fbaf400d09b4a7a5378e3859b894b22dcb17bdca482c0074fc257465bedf01e7d00b3b9baf3b31598029f50753f32535f0b1976a54b8a4af7c181fe4dcea618"' }>
                                            <li class="link">
                                                <a href="components/ElementoFormularioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ElementoFormularioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormularioDinamicoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormularioDinamicoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FotografiasModule.html" data-type="entity-link" >FotografiasModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FotografiasModule-ecaaf2cc0a8e55c769c9e5a1cee5655b64a4b56a3f1d6fcfe6baae02bd71ac1c686619b2830eec352a3cdf69449509bb5eb9137521b7b41edf20d63686c2ee6c"' : 'data-target="#xs-components-links-module-FotografiasModule-ecaaf2cc0a8e55c769c9e5a1cee5655b64a4b56a3f1d6fcfe6baae02bd71ac1c686619b2830eec352a3cdf69449509bb5eb9137521b7b41edf20d63686c2ee6c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FotografiasModule-ecaaf2cc0a8e55c769c9e5a1cee5655b64a4b56a3f1d6fcfe6baae02bd71ac1c686619b2830eec352a3cdf69449509bb5eb9137521b7b41edf20d63686c2ee6c"' :
                                            'id="xs-components-links-module-FotografiasModule-ecaaf2cc0a8e55c769c9e5a1cee5655b64a4b56a3f1d6fcfe6baae02bd71ac1c686619b2830eec352a3cdf69449509bb5eb9137521b7b41edf20d63686c2ee6c"' }>
                                            <li class="link">
                                                <a href="components/FotografiaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FotografiaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FotografiasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FotografiasComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FotografiasRoutingModule.html" data-type="entity-link" >FotografiasRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-96e70798f2785f8bddffe4c128f542f623f8c5421273561d9e87e92cdbc7ddd5ee4cf97321cad32c969bc3d9c61afad0069ed91e28f3dd23288775b3008cbe16"' : 'data-target="#xs-components-links-module-HomeModule-96e70798f2785f8bddffe4c128f542f623f8c5421273561d9e87e92cdbc7ddd5ee4cf97321cad32c969bc3d9c61afad0069ed91e28f3dd23288775b3008cbe16"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-96e70798f2785f8bddffe4c128f542f623f8c5421273561d9e87e92cdbc7ddd5ee4cf97321cad32c969bc3d9c61afad0069ed91e28f3dd23288775b3008cbe16"' :
                                            'id="xs-components-links-module-HomeModule-96e70798f2785f8bddffe4c128f542f623f8c5421273561d9e87e92cdbc7ddd5ee4cf97321cad32c969bc3d9c61afad0069ed91e28f3dd23288775b3008cbe16"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InventarioModule.html" data-type="entity-link" >InventarioModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InventarioModule-9c4bd05f6431c0fe2235488d4173872c31f2900761dac1f84a0498e225b1a97f9cfe4f6ad12b976e187e839de2c55f018d13c509ee5d9f222f7c11215634a95e"' : 'data-target="#xs-components-links-module-InventarioModule-9c4bd05f6431c0fe2235488d4173872c31f2900761dac1f84a0498e225b1a97f9cfe4f6ad12b976e187e839de2c55f018d13c509ee5d9f222f7c11215634a95e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InventarioModule-9c4bd05f6431c0fe2235488d4173872c31f2900761dac1f84a0498e225b1a97f9cfe4f6ad12b976e187e839de2c55f018d13c509ee5d9f222f7c11215634a95e"' :
                                            'id="xs-components-links-module-InventarioModule-9c4bd05f6431c0fe2235488d4173872c31f2900761dac1f84a0498e225b1a97f9cfe4f6ad12b976e187e839de2c55f018d13c509ee5d9f222f7c11215634a95e"' }>
                                            <li class="link">
                                                <a href="components/ArtefactoinventarioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ArtefactoinventarioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ArtefactosinventarioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ArtefactosinventarioComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InventarioRoutingModule.html" data-type="entity-link" >InventarioRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SeguridadModule.html" data-type="entity-link" >SeguridadModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SeguridadModule-c333e56457872d7731c6cacec4167fe4b978d6458968b7def15cfd6d8cc47369e87a344427cff8354ea924887a5b84ac395784a659881710b96469cb1b63fd5c"' : 'data-target="#xs-components-links-module-SeguridadModule-c333e56457872d7731c6cacec4167fe4b978d6458968b7def15cfd6d8cc47369e87a344427cff8354ea924887a5b84ac395784a659881710b96469cb1b63fd5c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SeguridadModule-c333e56457872d7731c6cacec4167fe4b978d6458968b7def15cfd6d8cc47369e87a344427cff8354ea924887a5b84ac395784a659881710b96469cb1b63fd5c"' :
                                            'id="xs-components-links-module-SeguridadModule-c333e56457872d7731c6cacec4167fe4b978d6458968b7def15cfd6d8cc47369e87a344427cff8354ea924887a5b84ac395784a659881710b96469cb1b63fd5c"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarSeguroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarSeguroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsuarioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsuarioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsuariosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsuariosComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SeguridadRoutingModule.html" data-type="entity-link" >SeguridadRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ArchivoImpl.html" data-type="entity-link" >ArchivoImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArtefactoImpl.html" data-type="entity-link" >ArtefactoImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArtefactoInventario.html" data-type="entity-link" >ArtefactoInventario</a>
                            </li>
                            <li class="link">
                                <a href="classes/BombaAviacionImpl.html" data-type="entity-link" >BombaAviacionImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/CoheteImpl.html" data-type="entity-link" >CoheteImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/DocumentoImpl.html" data-type="entity-link" >DocumentoImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/EspoletaImpl.html" data-type="entity-link" >EspoletaImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/FichaVIPImpl.html" data-type="entity-link" >FichaVIPImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/FormulariosTipo.html" data-type="entity-link" >FormulariosTipo</a>
                            </li>
                            <li class="link">
                                <a href="classes/FormularioTipoCheckBoxes.html" data-type="entity-link" >FormularioTipoCheckBoxes</a>
                            </li>
                            <li class="link">
                                <a href="classes/FormularioTipoDropDown.html" data-type="entity-link" >FormularioTipoDropDown</a>
                            </li>
                            <li class="link">
                                <a href="classes/FormularioTipoTextArea.html" data-type="entity-link" >FormularioTipoTextArea</a>
                            </li>
                            <li class="link">
                                <a href="classes/FormularioTipoTextBox.html" data-type="entity-link" >FormularioTipoTextBox</a>
                            </li>
                            <li class="link">
                                <a href="classes/FotografiaImpl.html" data-type="entity-link" >FotografiaImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/Granadampl.html" data-type="entity-link" >Granadampl</a>
                            </li>
                            <li class="link">
                                <a href="classes/MinaImpl.html" data-type="entity-link" >MinaImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/MisilImpl.html" data-type="entity-link" >MisilImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/MunicionImpl.html" data-type="entity-link" >MunicionImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProyectilImpl.html" data-type="entity-link" >ProyectilImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/RolImpl.html" data-type="entity-link" >RolImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/Sala.html" data-type="entity-link" >Sala</a>
                            </li>
                            <li class="link">
                                <a href="classes/SearchCriteriaImpl.html" data-type="entity-link" >SearchCriteriaImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/TokenDto.html" data-type="entity-link" >TokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UsuarioImpl.html" data-type="entity-link" >UsuarioImpl</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ArchivosService.html" data-type="entity-link" >ArchivosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CreadorFormulariosService.html" data-type="entity-link" >CreadorFormulariosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CriptoService.html" data-type="entity-link" >CriptoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CriteriosBusquedaService.html" data-type="entity-link" >CriteriosBusquedaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DocumentosService.html" data-type="entity-link" >DocumentosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FichaPlantillaFormService.html" data-type="entity-link" >FichaPlantillaFormService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FichaService.html" data-type="entity-link" >FichaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FichavipService.html" data-type="entity-link" >FichavipService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FotografiasService.html" data-type="entity-link" >FotografiasService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InventarioService.html" data-type="entity-link" >InventarioService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginService.html" data-type="entity-link" >LoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TokenService.html" data-type="entity-link" >TokenService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsuariosService.html" data-type="entity-link" >UsuariosService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/FichaInterceptor.html" data-type="entity-link" >FichaInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AdminGuard.html" data-type="entity-link" >AdminGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/UsuarioGuard.html" data-type="entity-link" >UsuarioGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Archivo.html" data-type="entity-link" >Archivo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Artefacto.html" data-type="entity-link" >Artefacto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BombaAviacion.html" data-type="entity-link" >BombaAviacion</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Cohete.html" data-type="entity-link" >Cohete</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Documento.html" data-type="entity-link" >Documento</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Espoleta.html" data-type="entity-link" >Espoleta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FichaVIP.html" data-type="entity-link" >FichaVIP</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Fotografia.html" data-type="entity-link" >Fotografia</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Granada.html" data-type="entity-link" >Granada</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Mina.html" data-type="entity-link" >Mina</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Misil.html" data-type="entity-link" >Misil</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Municion.html" data-type="entity-link" >Municion</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Proyectil.html" data-type="entity-link" >Proyectil</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Rol.html" data-type="entity-link" >Rol</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SearchCriteria.html" data-type="entity-link" >SearchCriteria</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Usuario.html" data-type="entity-link" >Usuario</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});