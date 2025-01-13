import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './server.mjs';
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
      good: null
    };
  },
  mounted() {
    this.fetchGood();
  },
  methods: {
    async fetchGood() {
      try {
        const response = await this.$axios.get(`/getGoods/${this.$route.params.id}`);
        this.good = response.data;
      } catch (error) {
        console.error("Error fetching good:", error);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1>Good Detail</h1>`);
  if ($data.good) {
    _push(`<div><p>Name: ${ssrInterpolate($data.good.name)}</p><p>Price: ${ssrInterpolate($data.good.price)}</p></div>`);
  } else {
    _push(`<div><p>Loading...</p></div>`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Goods/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _id_ as default };
//# sourceMappingURL=_id_-D0e-azPY.mjs.map
