import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { registerCompoents, registerAntCompoents } from "@/assets/global"

const app: any = createApp(App)
app.config.productionTip = false
registerCompoents(app)
registerAntCompoents(app)
app.use(store)
app.use(router)

app.mount("#app")
