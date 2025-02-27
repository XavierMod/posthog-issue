import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import posthog from "posthog-js";

const posthogApiKey = "api-key";
const distinctId = "distinct-id";
const apiHost = "api-host";

const userRoles = ["DrDoctor Admin"];

posthog.init(posthogApiKey, {
  api_host: apiHost,
  ui_host: "https://eu.posthog.com",
  bootstrap: {
    distinctID: distinctId,
    isIdentifiedID: true,
  },
  persistence: "localStorage",
  capture_pageview: false,
  advanced_disable_feature_flags_on_first_load: true,
  autocapture: {
    css_selector_allowlist: ["[data-record='true']", "[data-record='true'] *"],
  },
});

posthog.identify(distinctId, { userRoles });

createApp(App).mount("#app");
