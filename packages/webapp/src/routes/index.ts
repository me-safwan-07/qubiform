import { AuthLayout } from "@/layouts/Auth";

const routes = [
    {
        path: '/sign-up',
        layout: AuthLayout,
        options: {
            title: "Signup"
        }
    }
]

export default routes
