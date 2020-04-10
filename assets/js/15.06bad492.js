(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{259:function(t,e,s){"use strict";s.r(e);var a=s(28),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"integration-in-your-website"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#integration-in-your-website"}},[t._v("#")]),t._v(" Integration in your website")]),t._v(" "),s("h2",{attrs:{id:"using-the-widget"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-the-widget"}},[t._v("#")]),t._v(" Using the widget")]),t._v(" "),s("p",[t._v("As described in the section "),s("RouterLink",{attrs:{to:"/user-docs/editing-association-contents.html"}},[t._v("Editing association")]),t._v(" of posts, besides indicating for each post or page the available translations, the widget can be integrated in any dynamic sidebar.")],1),t._v(" "),s("p",[s("img",{attrs:{src:"/widgets-admin.png",alt:"Widgets admin"}})]),t._v(" "),s("p",[t._v("The output depends on your settings in the plugin configuration and on the CSS of your theme but here an example:")]),t._v(" "),s("p",[s("img",{attrs:{src:"/widget-output.png",alt:"Widget output"}})]),t._v(" "),s("h2",{attrs:{id:"using-the-shortcodes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-the-shortcodes"}},[t._v("#")]),t._v(" Using the shortcodes")]),t._v(" "),s("p",[t._v("The "),s("strong",[t._v("Multisite Language Switcher")]),t._v(" comes with two shortcodes:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("[sc_msls]\n")])])]),s("p",[t._v("You can insert it into your posts or pages when you want to show a link to the alternative translation of the current content.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("[sc_msls_widget]\n")])])]),s("p",[t._v("This is a shortcode that renders the widget output because there are themes that you widgets also in that way.")]),t._v(" "),s("h2",{attrs:{id:"using-the-block"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-the-block"}},[t._v("#")]),t._v(" Using the block")]),t._v(" "),s("p",[t._v("The last shortcode is also available as a block in the new Gutenberg editor. This is a first step because the UI is right now far from perfect.")]),t._v(" "),s("p",[s("img",{attrs:{src:"/block-editor.png",alt:"Block editor"}})]),t._v(" "),s("h2",{attrs:{id:"using-the-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-the-api"}},[t._v("#")]),t._v(" Using the API")]),t._v(" "),s("p",[t._v("It is also possible to directly use the plugin features in your theme, you can use for example the following code in the "),s("em",[t._v("header.php")]),t._v(" file of your WordPress theme.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("<?php if ( function_exists( 'the_msls' ) ) the_msls(); ?>\n")])])]),s("p",[t._v("MSLS comes with some additional API functions if you need the URL of a flag by URL for example. There is also the possibility to get the description of the blog and the permalink of the current content by language (locale):")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("$language    = get_locale();\n$flag_url    = get_msls_flag_url( $language );\n$description = get_msls_blog_description( $language );\n$locale_href = get_msls_permalink( $locale );\n")])])])])}),[],!1,null,null,null);e.default=i.exports}}]);