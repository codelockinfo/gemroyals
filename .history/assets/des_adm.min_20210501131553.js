!function(e){"use strict";var t="#shopify-section-",s="type_packery",o=".js_packery",a="type_carousel",i="type_pin_owl",r=".js_carousel",n="type_masonry",_="type_hero_video",p=".js_video",l=e("body").hasClass("template-product"),d="js_lbcl",h=(e(window).width(),e(document)),f=e("body"),g=(e("#alet_css_t4"),Shopify.theme.id);e(".cp_cd_js").removeClass("dn"),e("#sett_clt4").remove(),"collection"==t_name&&geckoShopify.RefreshPriceTitle(e(".blockid_price")),h.on("shopify:section:load",function(r){var c=r.detail.sectionId,n=e(t+c);if(e(".cp_cd_js").removeClass("dn"),n.hasClass(a)||n.hasClass(i));else if(n.hasClass(s)){var d=n.find(o);geckoShopify.refresh_packery(d)}else if(n.hasClass("type_isotope"))d=n.find(".js_isotope"),geckoShopify.refresh_isotope(d);else if(n.hasClass("js_faq_ad"))geckoShopify.spAccordion();else if(n.hasClass(_)){if($script("//www.youtube.com/iframe_api","loaded_v_js"),0==(d=n.find(p)).length)return;geckoShopify.refresh_Youtube(d)}else n.hasClass("type_instagram")&&(d=n.find(".js_nt_ist"),geckoShopify.refresh_ins(d));if(n.find(".nt_parallax_true").length>0&&geckoShopify.parallax(),n.hasClass("tp_se_cdt")&&geckoShopify.InitCountdown(),n.hasClass("tp_se_cdt2")&&geckoShopify.InitSeCountdown(),n.hasClass("tp_se_cdth")&&geckoShopify.bannerCountdown(),geckoShopify.fullHeightRow(),l)switch(c){case"pr_summary":geckoShopify.ATC_animation("#callBackVariant_ppr .single_add_to_cart_button"),geckoShopify.NtproductPage(),geckoShopify.InitCountdown_pr("#nt_countdow_ppr");var h=e("#nt_stock_ppr"),f=h.data("cur"),g=h.data("st"),k=h.data("qty");(1==g||3==g)&&f<k&&f>0?geckoShopify.progressbar("#nt_stock_ppr",f):1!=g&&geckoShopify.progressbar("#nt_stock_ppr"),geckoShopify.delivery_order("#delivery_ppr"),geckoShopify.real_time("#counter_ppr"),geckoShopify.flashSold("#sold_ppr"),"undefined"!=typeof addthis&&addthis.layers.refresh();break;case"product-recommendations":geckoShopify.PrRecommendations();break;case"recently_viewed":setTimeout(function(){geckoShopify.recently_viewed()},2e3);break;case"pr_description":geckoShopify.spAccordion()}switch(c){case"header_7":geckoShopify.mobileNav();break;case"collection_page":d=e("#shopify-section-collection_page .nt_packery");var y=e("#shopify-section-collection_page .js_isotope");d.length>0?geckoShopify.refresh_packery(d):y.length>0&&geckoShopify.refresh_isotope(y);break;case"search_page":d=e("#shopify-section-search_page .js_isotope"),geckoShopify.refresh_isotope(d);break;case"newsletter_pp":geckoShopify.NewsletterPopup();break;case"age_verify":geckoShopify.ageVerify();break;case"cookies_law":geckoShopify.cookiesLawPP();break;case"promo_pr_pp":geckoShopify.PromoPrPopup();break;case"re_upsell":e("#mfp_re_upsell").length>0&&(e.magnificPopup.open({items:{src:"#mfp_re_upsell",type:"inline"}}),geckoShopify.refresh_flickity(e("#mfp_re_upsell .nt_slider")),e(".nt_products_holder .pr_animated:not(.done)").addClass("done"));case"sales_popup":geckoShopify.SalesPopup();break;case"sticky_atc":geckoShopify.stickyAddToCart(),geckoShopify.ATC_animation("#shopify-section-sticky_atc .single_add_to_cart_button"),e(".sticky_atc_wrap").addClass("sticky_atc_shown")}}),h.on("shopify:section:unload",function(s){var o=s.detail.sectionId;e(t+o),geckoShopify.fullHeightRow()}),h.on("shopify:section:select",function(c){var n=c.detail.sectionId,l=e(t+n);if(geckoShopify.fullHeightRow(),l.hasClass(a)||l.hasClass(i)){var d=l.find(r);geckoShopify.refresh_flickity(d)}else l.hasClass(s)?(d=l.find(o),geckoShopify.refresh_packery(d)):l.hasClass("type_isotope")?(d=l.find(".js_isotope"),geckoShopify.refresh_isotope(d)):l.hasClass(_)?d=l.find(p):l.hasClass("type_popup_video")?geckoShopify.InitPopupVideo():l.hasClass("js_fetpr_se")&&(geckoShopify.ProductSection(n),geckoShopify.refresh_flickity(e(".p-thumb"+n)));switch(n){case"header_banner":geckoShopify.bannerCountdown(),geckoShopify.hTransparent(!0);break;case"mb_nav":case"mb_cat":e(".push_side.push-menu-btn:not(.act_current)").trigger("click"),e('[data-id="#shopify-section-'+n+'_js"]').removeClass("active").trigger("click");break;case"nt_filter":case"nt_filter2":e(window).width()<1025?e('[data-opennt="#shopify-section-'+n+'"]').trigger("click"):e('.pop_default .js_filter,.nt_pop_sidebar [data-opennt="#shopify-section-'+n+'"]').trigger("click"),geckoShopify.RefreshPriceTitle(e(".blockid_price"));break;case"sidebar_shop":case"sidebar_shop2":e(window).width()<1025?e('[data-opennt="#shopify-section-sidebar_shop"]').trigger("click"):e(".cat_hidden_true .btn_sidebar").trigger("click"),geckoShopify.RefreshPriceTitle(e(".blockid_price"));break;case"nt_custom_color":e("#admclnt").length>0&&e.magnificPopup.open({items:{src:"#admclnt",type:"inline"}});break;case"cart_widget":geckoShopify.cartLazyUp(),e("[data-id='#nt_cart_canvas']").trigger("click"),geckoShopify.cart_tls_ship();break;case"collection_page":geckoShopify.RefreshPriceTitle(e(".blockid_price"));break;case"footer_top":geckoShopify.footerCollapse(),geckoShopify.stickyFooter(),0==e(".footer_sticky_true").length&&e("#nt_content").css({marginBottom:0});break;case"newsletter_pp":e(".popup_new_wrap").trigger("open_newsletter");break;case"age_verify":e(".popup_age_wrap").trigger("open_age_pp");break;case"cookies_law":e(".popup_cookies_wrap").trigger("open_cookies_pp");break;case"promo_pr_pp":e(".popup_prpr_wrap").trigger("open_promopr"),setTimeout(function(){geckoShopify.refresh_flickity(e(".popup_prpr_wrap .js_carousel")),geckoShopify.InitCountdown(),geckoShopify.lazyWishUpdate(),f.trigger("refresh_currency")},650);break;case"re_upsell":e("#mfp_re_upsell").length>0&&(e.magnificPopup.open({items:{src:"#mfp_re_upsell",type:"inline"}}),geckoShopify.refresh_flickity(e("#mfp_re_upsell .nt_slider")),e(".nt_products_holder .pr_animated:not(.done)").addClass("done"));case"sales_popup":e(".popup_slpr_wrap").trigger("open_slpr_pp");break;case"sticky_atc":e(".sticky_atc_wrap").addClass("sticky_atc_shown"),setTimeout(function(){e(".sticky_atc_wrap").addClass("sticky_atc_shown")},500)}}),h.on("shopify:section:deselect",function(s){var o=s.detail.sectionId;switch(e(t+o).hasClass("sp_header_mid")&&e(".sp_header_mid .menu-item").removeClass("menu_item_hover"),geckoShopify.fullHeightRow(),o){case"sidebar_shop":case"nt_custom_color":case"newsletter_pp":case"age_verify":case"promo_pr_pp":case"re_upsell":e.magnificPopup.close();break;case"mb_nav":case"mb_cat":case"cart_widget":e(".mask-overlay").trigger("click");break;case"nt_filter":case"nt_filter2":e(".js_filter.opened").trigger("click"),e.magnificPopup.close();break;case"cookies_law":e("#shopify-section-cookies_law").removeClass("pp_onshow").addClass("pp_onhide");break;case"sales_popup":e(".pp_slpr_close").trigger("click")}}),h.on("shopify:block:select",function(h){var g=h.detail.sectionId,y=h.detail.blockId,u=e(t+g);if(u.hasClass("type_tab"))e(".tab_se_element:not(.lazyload)").addClass("lazyload").one("lazyincluded",function(t){f.trigger("refresh_currency"),geckoShopify.InitCountdown();var s=e(t.target)[0],o=e(s).find(".js_carousel");0!=o.length&&geckoShopify.refresh_flickity(o)}),geckoShopify.catTabs(),e('a[data-bid="'+y+'"]').trigger("click");else if(u.hasClass(a))k.select(u,y),geckoShopify.InitHTMLVideo();else if(u.hasClass(i)){var m=e("#pin_"+y);if(!m.hasClass("pin__wr_js")){var b=m.attr("data-i");m=e("#pin_"+b)}u.find(r).flickity("selectCell",m.index()),u.find(r).flickity("pausePlayer"),setTimeout(function(){e(".pin__type_"+y+" .mfp_js:not(.current_clicked)").trigger("click"),e(".hotspot_"+y+".mfp_js:not(.current_clicked)").trigger("click")},350)}else if(u.hasClass(n));else if(u.hasClass(s)&&u.hasClass(d)){var C=u.find(o);geckoShopify.refresh_packery(C),e(".pin__type_"+y+".pin__opened").trigger("click"),setTimeout(function(){e(".pin__type_"+y+":not(.pin__opened) .pin_tt_js").trigger("click")},350)}else if(u.hasClass(s))C=u.find(o),geckoShopify.refresh_packery(C);else if(u.hasClass(_))C=u.find(p),geckoShopify.refresh_Youtube(C),geckoShopify.InitHTMLVideo();else if("hcat_nav"==g)e(".lazy_h_cat").html(e("#html_hcat_nav").html()),e(".ha8_cat").addClass("menu_item_hover");else if(u.hasClass("sp_header_mid")){if(e("#bkjs_"+y).length>0)var v=e(".has-children#item_"+e("#bkjs_"+y).attr("data-id"));else v=e(".has-children#item_"+y);e(".sp_header_mid .menu-item").removeClass("menu_item_hover"),v.addClass("menu_item_hover"),v.hasClass("menu_has_offsets")&&geckoShopify.initMegaMenu(v),e(".lazy_menu_mega").one("lazyincluded",function(t){v.hasClass("menu_has_offsets")&&geckoShopify.initMegaMenu(v);var s=e(t.target),o=JSON.parse(s.attr("data-jspackery"));o.originLeft=f.hasClass("rtl_false"),s.packery(o),f.trigger("refresh_currency"),geckoShopify.InitSeCountdown(),s.find(".js_carousel.flickity-enabled").length>0||geckoShopify.refresh_flickity(s.find(".js_carousel"))}),e(".unlazy_menu_mega").length>0&&e(".unlazy_menu_mega").each(function(){var t=e(this),s=JSON.parse(t.attr("data-jspackery"));t.hasClass("menu_mega_packery")&&t.packery("destroy"),t.addClass("menu_mega_packery").packery(s)})}else u.hasClass(d)&&(e(".pin__type_"+y+".pin__opened").trigger("click"),setTimeout(function(){e(".pin__type_"+y+":not(.pin__opened) .pin_tt_js").trigger("click")},350));"footer_top"==g?e(".footer_collapse_true #block_"+y+":not(.footer_opened)>.widget-title").trigger("click"):"mb_nav"==g||"mb_cat"==g||"header_7"==g?e("#item_"+y+":not(.nt_opended)>a .nav_link_icon").trigger("click"):"nt_custom_color"==g?(e("#item_"+y).addClass("selected"),e("#admclnt").length>0&&0==e(".mfp-content #admclnt").length&&e.magnificPopup.open({items:{src:"#admclnt",type:"inline"}})):"pr_description"==g?e(".des_style_2").length>0||e(".des_mb_2").length>0&&e(window).width()<1025?(c,e("#tab_"+y+" .tab-heading").trigger("click")):e('ul.des_style_1>li>a[href="#tab_'+y+'"]').trigger("click"):u.hasClass("type_faq")&&e("#tab_"+y+" .tab-heading").trigger("click"),l&&(geckoShopify.InitCountdown_pr("#nt_countdow_ppr"),geckoShopify.progressbar("#nt_stock_ppr"))}),h.on("shopify:block:deselect",function(r){var c=r.detail.sectionId,_=r.detail.blockId,p=e(t+c);if(p.hasClass(a))k.deselect(p);else if(p.hasClass(i))k.deselect(p),e.magnificPopup.close();else if(p.hasClass(n));else if(p.hasClass(s)){var h=p.find(o);geckoShopify.refresh_packery(h)}else"hcat_nav"==c?e(".ha8_cat").removeClass("menu_item_hover"):p.hasClass("sp_header_mid")?e(".sp_header_mid .menu-item").removeClass("menu_item_hover"):p.hasClass(d)&&e(".pin__type_"+_+".pin__opened").trigger("click");"footer_top"==c?e(".footer_collapse_true #block_"+_+".footer_opened>.widget-title").trigger("click"):"mb_nav"==c||"mb_cat"==c||"header_7"==c?e("#item_"+_+".nt_opended>a .nav_link_icon").trigger("click"):"nt_custom_color"==c?e("#item_"+_).removeClass("selected"):"pr_description"==c?(e(".des_style_2").length>0||e(".des_mb_2").length>0&&e(window).width()<1025)&&e(".active#tab_"+_+" .tab-heading").trigger("click"):p.hasClass("type_faq")&&e(".active#tab_"+_+" .tab-heading").trigger("click"),l&&(geckoShopify.InitCountdown_pr("#nt_countdow_ppr"),geckoShopify.progressbar("#nt_stock_ppr"),geckoShopify.delivery_order("#delivery_ppr"),"undefined"!=typeof addthis&&addthis.layers.refresh())});var k={select:function(t,s){if(e("#nt_"+s).length>0)var o=e("#nt_"+s).index();else o=e("#b_"+s).closest(".slideshow__slide").index();e("#nt_"+s),t.find(r).flickity("select",o),t.find(r).flickity("pausePlayer")},deselect:function(e){e.find(r).flickity("unpausePlayer")}},y="no_token";e.ajax({type:"GET",url:"/admin/themes/"+g,success:function(e){y=e.split('name="csrf-token"')[1].split(" />")[0].split('"')[1]}}),h.on("click",".put_asset_js",function(t){var s=e(this),o=s.attr("data-key"),a=s.attr("data-sl");s.addClass("loading"),e("#ld_cl_bar").trigger("ld_bar_star"),e.ajax({url:"/admin/api/2021-07/themes/"+g+"/assets.json",type:"PUT",headers:{"content-type":"application/x-www-form-urlencoded; charset=UTF-8","x-csrf-token":y},data:{asset:{key:o,value:e(a).html()}}}).done(function(){console.log("Update Complete"),s.removeClass("loading").addClass("t4_done"),e("#ld_cl_bar").trigger("ld_bar_end"),setTimeout(function(){s.removeClass("t4_done")},1e3)})}),h.on("click",".dcp_cd_btn",function(t){var s=e(this),o=s.siblings(".dcp_cd_ip")[0];o.select(),o.setSelectionRange(0,99999),document.execCommand("copy"),s.text("Copied Shortcode")}),e(window.parent.document);var u=e("#ld_cl_bar");h.on("click","#enable_tag",function(t){if(t.preventDefault(),e(".t4-import").length>0)f.addClass("open-import");else{u.trigger("ld_bar_star");var s=e(this);s.addClass("up_loading"),fetch(s.attr("href")).then(e=>e.text()).then(t=>{u.trigger("ld_bar_90"),u.trigger("ld_bar_end"),f.append(t).addClass("open-import"),s.removeClass("up_loading"),e(".show_admin_t4_svg").removeClass("show_admin_t4_svg").addClass("not_add_clsvg")}).catch(t=>{u.trigger("ld_bar_90"),u.trigger("ld_bar_end"),s.removeClass("up_loading"),e(".show_admin_t4_svg").removeClass("show_admin_t4_svg").addClass("not_add_clsvg"),console.error("Error:",t)})}}),h.on("click",".admin_t4_tools_btn",function(t){e(this).toggleClass("show_admin_t4_pp")}),h.on("click",".admin_t4_tools__item:not(.not_add_clsvg)",function(t){e(this).addClass("show_admin_t4_svg")}),e('[data-role="save"]'),e("#t4_style_update_css"),e(".t4_tools_btns").addClass("on_show");var m=e(ThemePuT4);if("true"==ThemeIdLoT4||"true"==ThemeIdT4)m.remove();else{e(ThemePuT4).removeClass("hide hidden");var b=e("#ipt_codet4"),C=(e("#res_codet4"),m.attr("data-email")),v=b.val();(m.is(":hidden")||0==m.length)&&"demo"!=Shopify.theme.role&&e.ajax({type:"PUT",url:"/admin/api/2021-07/themes/"+g+".json",headers:{"content-type":"application/x-www-form-urlencoded; charset=UTF-8","x-csrf-token":y},dataType:"json",data:{theme:{id:g,role:"demo"}},success:function(e){top.window.location.reload()}}),e("#btn_codet4").on("click",function(t){t.preventDefault(),t.stopPropagation();var s=e(this),o=b.val();if(o==v)b.hasClass("t4Warning")?(b.removeClass("shaket4code").addClass("t4Warning2"),setTimeout(function(){b.addClass("shaket4code")},100)):b.addClass("t4Warning shaket4code");else{v=o,b.attr("class",""),s.addClass("loading");var a=["4","t","h","e","p","l","i","c","o","/",".",":","n","s"],i={shopify_domain:window.location.hostname,email:C,theme:ThemeNameT4,purchase_code:o};fetch(a[2]+a[1]+a[1]+a[4]+a[13]+a[11]+a[9]+a[9]+a[5]+a[6]+a[7]+a[10]+a[1]+a[2]+a[3]+a[0]+a[10]+a[7]+a[8]+a[9]+a[5]+a[6]+a[7]+a[3]+a[12]+a[13]+a[3]+a[9]+a[7]+a[2]+a[3]+a[7]+"k",{headers:{accept:"*/*","cache-control":"no-cache","x-requested-with":"XMLHttpRequest"},body:btoa(encodeURIComponent(JSON.stringify(i))),method:"POST",mode:"cors"}).then(e=>{if(e.ok)return e.json();throw""})}})}}(jQuery_T4NT),jQuery_T4NT(window).resize(function(){geckoShopify.footerCollapse()});