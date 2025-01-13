import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "axios";
const _sfc_main = {
  data() {
    return {
      name: "",
      price: ""
    };
  },
  methods: {
    async addGoods() {
      try {
        const body = {
          name: this.name,
          price: this.price
        };
        const response = await this.$axios.post("/addGood", body);
        console.log(response);
      } catch (error) {
        console.error("Error fetching goods:", error);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<form${ssrRenderAttrs(_attrs)}><input type="text" name="name"${ssrRenderAttr("value", this.name)} placeholder="Name"><input type="number" name="price"${ssrRenderAttr("value", this.price)} placeholder="price"><button type="submit">Add goods</button></form>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Goods/addGoods.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const addGoods = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  addGoods as default
};
//# sourceMappingURL=addGoods-CC8qC0qb.js.map
