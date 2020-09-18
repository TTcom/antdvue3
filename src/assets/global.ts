import about from "@/views/About.vue"
import { Button, DatePicker } from "ant-design-vue"
export const registerCompoents = (app: any) => {
  app.component("vabout", about)
}

export const registerAntCompoents = (app: any) => {
  app.use(Button)
  app.use(DatePicker)
}
