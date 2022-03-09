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
                    <a href="index.html" data-type="index-link">angular-bp-2022 documentation</a>
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
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
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
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-a5b47de8d49ac6250f77fd9aeca2f6166a0f30f1c2f8c5f53fbbe087c73f64b3d5afc8af43ad68e204765da343b78907a5e3bd151d565778cc83989943ed084a"' : 'data-target="#xs-components-links-module-AppModule-a5b47de8d49ac6250f77fd9aeca2f6166a0f30f1c2f8c5f53fbbe087c73f64b3d5afc8af43ad68e204765da343b78907a5e3bd151d565778cc83989943ed084a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-a5b47de8d49ac6250f77fd9aeca2f6166a0f30f1c2f8c5f53fbbe087c73f64b3d5afc8af43ad68e204765da343b78907a5e3bd151d565778cc83989943ed084a"' :
                                            'id="xs-components-links-module-AppModule-a5b47de8d49ac6250f77fd9aeca2f6166a0f30f1c2f8c5f53fbbe087c73f64b3d5afc8af43ad68e204765da343b78907a5e3bd151d565778cc83989943ed084a"' }>
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
                                <a href="modules/ClientsModule.html" data-type="entity-link" >ClientsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClientsModule-30e07a0c4082731593301c7eae5c45fd135c3538f989000be7cfb537f604fd0540ce112c04bca03d9c49cdf67eb74a871631ae5539af5c895a346f1d0b444036"' : 'data-target="#xs-components-links-module-ClientsModule-30e07a0c4082731593301c7eae5c45fd135c3538f989000be7cfb537f604fd0540ce112c04bca03d9c49cdf67eb74a871631ae5539af5c895a346f1d0b444036"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClientsModule-30e07a0c4082731593301c7eae5c45fd135c3538f989000be7cfb537f604fd0540ce112c04bca03d9c49cdf67eb74a871631ae5539af5c895a346f1d0b444036"' :
                                            'id="xs-components-links-module-ClientsModule-30e07a0c4082731593301c7eae5c45fd135c3538f989000be7cfb537f604fd0540ce112c04bca03d9c49cdf67eb74a871631ae5539af5c895a346f1d0b444036"' }>
                                            <li class="link">
                                                <a href="components/PageAddClientComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageAddClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageEditClientComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageEditClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageListClientsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageListClientsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-3d2f28c4c084848138d4fa8b8d1e9b7c9f1cdd33026e8fc3b1d77cf3981d13bb6e93619bfcb825efdaf51b044a42e22e3036a18fad9789f9604ce041cc1314e1"' : 'data-target="#xs-components-links-module-CoreModule-3d2f28c4c084848138d4fa8b8d1e9b7c9f1cdd33026e8fc3b1d77cf3981d13bb6e93619bfcb825efdaf51b044a42e22e3036a18fad9789f9604ce041cc1314e1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-3d2f28c4c084848138d4fa8b8d1e9b7c9f1cdd33026e8fc3b1d77cf3981d13bb6e93619bfcb825efdaf51b044a42e22e3036a18fad9789f9604ce041cc1314e1"' :
                                            'id="xs-components-links-module-CoreModule-3d2f28c4c084848138d4fa8b8d1e9b7c9f1cdd33026e8fc3b1d77cf3981d13bb6e93619bfcb825efdaf51b044a42e22e3036a18fad9789f9604ce041cc1314e1"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IconsModule.html" data-type="entity-link" >IconsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-IconsModule-6dbcabde43fc9f112caf2250d80970b72b7c7db70c5f8ad0455c359a641ad6c9cc5331320af22f75ea0d78befe2c31a9868141a1ab77f8c60e589b51b46e4745"' : 'data-target="#xs-components-links-module-IconsModule-6dbcabde43fc9f112caf2250d80970b72b7c7db70c5f8ad0455c359a641ad6c9cc5331320af22f75ea0d78befe2c31a9868141a1ab77f8c60e589b51b46e4745"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IconsModule-6dbcabde43fc9f112caf2250d80970b72b7c7db70c5f8ad0455c359a641ad6c9cc5331320af22f75ea0d78befe2c31a9868141a1ab77f8c60e589b51b46e4745"' :
                                            'id="xs-components-links-module-IconsModule-6dbcabde43fc9f112caf2250d80970b72b7c7db70c5f8ad0455c359a641ad6c9cc5331320af22f75ea0d78befe2c31a9868141a1ab77f8c60e589b51b46e4745"' }>
                                            <li class="link">
                                                <a href="components/IconCloseComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconCloseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconNavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconNavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link" >LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-d723f1ca26d2fbdc32429a694420c6141d3a131d7bb6bc6543f00cd1dda50e362e741b39e35fa0ee6561d51bf6651edf932246fecefd6e21ff4db09d50545452"' : 'data-target="#xs-components-links-module-LoginModule-d723f1ca26d2fbdc32429a694420c6141d3a131d7bb6bc6543f00cd1dda50e362e741b39e35fa0ee6561d51bf6651edf932246fecefd6e21ff4db09d50545452"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-d723f1ca26d2fbdc32429a694420c6141d3a131d7bb6bc6543f00cd1dda50e362e741b39e35fa0ee6561d51bf6651edf932246fecefd6e21ff4db09d50545452"' :
                                            'id="xs-components-links-module-LoginModule-d723f1ca26d2fbdc32429a694420c6141d3a131d7bb6bc6543f00cd1dda50e362e741b39e35fa0ee6561d51bf6651edf932246fecefd6e21ff4db09d50545452"' }>
                                            <li class="link">
                                                <a href="components/PageResetPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageResetPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageSignInComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageSignInComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageSignUpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageSignUpComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginRoutingModule.html" data-type="entity-link" >LoginRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersModule.html" data-type="entity-link" >OrdersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OrdersModule-64103fc78c76daddcc1eed939c15d96ded990764598171ef71f917f65c62c14f6543ae6ee09ee42f66ad1893cf3b51d237a0055dda768012a64077fa0fee0578"' : 'data-target="#xs-components-links-module-OrdersModule-64103fc78c76daddcc1eed939c15d96ded990764598171ef71f917f65c62c14f6543ae6ee09ee42f66ad1893cf3b51d237a0055dda768012a64077fa0fee0578"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrdersModule-64103fc78c76daddcc1eed939c15d96ded990764598171ef71f917f65c62c14f6543ae6ee09ee42f66ad1893cf3b51d237a0055dda768012a64077fa0fee0578"' :
                                            'id="xs-components-links-module-OrdersModule-64103fc78c76daddcc1eed939c15d96ded990764598171ef71f917f65c62c14f6543ae6ee09ee42f66ad1893cf3b51d237a0055dda768012a64077fa0fee0578"' }>
                                            <li class="link">
                                                <a href="components/PageAddOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageAddOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageEditOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageEditOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageListOrdersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageListOrdersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersRoutingModule.html" data-type="entity-link" >OrdersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundModule.html" data-type="entity-link" >PageNotFoundModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PageNotFoundModule-b932d46a29c0e0a76522fe154bd389c4f0e9f97c871f6fd8b470ac7cbfdd4b05bf7e741fb4bdabc59cda68c6571aaa07707066c99b7963084717fa1461d6af5e"' : 'data-target="#xs-components-links-module-PageNotFoundModule-b932d46a29c0e0a76522fe154bd389c4f0e9f97c871f6fd8b470ac7cbfdd4b05bf7e741fb4bdabc59cda68c6571aaa07707066c99b7963084717fa1461d6af5e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageNotFoundModule-b932d46a29c0e0a76522fe154bd389c4f0e9f97c871f6fd8b470ac7cbfdd4b05bf7e741fb4bdabc59cda68c6571aaa07707066c99b7963084717fa1461d6af5e"' :
                                            'id="xs-components-links-module-PageNotFoundModule-b932d46a29c0e0a76522fe154bd389c4f0e9f97c871f6fd8b470ac7cbfdd4b05bf7e741fb4bdabc59cda68c6571aaa07707066c99b7963084717fa1461d6af5e"' }>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundRoutingModule.html" data-type="entity-link" >PageNotFoundRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TemplatesModule.html" data-type="entity-link" >TemplatesModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UiModule.html" data-type="entity-link" >UiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UiModule-e2e2b6e5e484732dac03c693b64623f96c12e56b25ffb756bf0969d693c67f1539bf2dacbf22879a3d15ede3d1d04b7b7ddebd36434d7f515210157e73b39153"' : 'data-target="#xs-components-links-module-UiModule-e2e2b6e5e484732dac03c693b64623f96c12e56b25ffb756bf0969d693c67f1539bf2dacbf22879a3d15ede3d1d04b7b7ddebd36434d7f515210157e73b39153"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiModule-e2e2b6e5e484732dac03c693b64623f96c12e56b25ffb756bf0969d693c67f1539bf2dacbf22879a3d15ede3d1d04b7b7ddebd36434d7f515210157e73b39153"' :
                                            'id="xs-components-links-module-UiModule-e2e2b6e5e484732dac03c693b64623f96c12e56b25ffb756bf0969d693c67f1539bf2dacbf22879a3d15ede3d1d04b7b7ddebd36434d7f515210157e73b39153"' }>
                                            <li class="link">
                                                <a href="components/Ui2Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Ui2Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiComponent</a>
                                            </li>
                                        </ul>
                                    </li>
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
                                <a href="classes/Order.html" data-type="entity-link" >Order</a>
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
                                    <a href="injectables/OrdersService.html" data-type="entity-link" >OrdersService</a>
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
                                <a href="interfaces/OrderI.html" data-type="entity-link" >OrderI</a>
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
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
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