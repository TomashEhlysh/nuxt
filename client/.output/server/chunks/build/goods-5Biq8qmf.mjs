import { _ as _export_sfc, a as __nuxt_component_0 } from './server.mjs';
import { withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'axios';

const _sfc_main = {
  data() {
    return {
      goods: []
    };
  },
  methods: {
    async fetchGoods() {
      try {
        const response = await this.$axios.get("/getGoods");
        this.goods = response.data;
      } catch (error) {
        console.error("Error fetching goods:", error);
      }
    }
  },
  mounted() {
    this.fetchGoods();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-cf136b12><h1 data-v-cf136b12>Goods List</h1><ul data-v-cf136b12><li data-v-cf136b12>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: `/goods/addGoods` }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Add goods`);
      } else {
        return [
          createTextVNode("Add goods")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><!--[-->`);
  ssrRenderList($data.goods, (good) => {
    _push(`<li data-v-cf136b12>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: `/goods/${good.id}`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(good.name)}`);
        } else {
          return [
            createTextVNode(toDisplayString(good.name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/goods.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const goods = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-cf136b12"]]);

export { goods as default };
//# sourceMappingURL=goods-5Biq8qmf.mjs.map
