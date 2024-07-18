import { getUserByEmail } from "./services";

const logIn = async (email, pass) => {
    const user = await getUserByEmail(email, pass);

    if (user) {
        return {
            nombre: user.data.nombre,
            email: user.data.email,
            role: "admin",
        };
    } else {
        const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
        const adminPass = process.env.NEXT_PUBLIC_ADMIN_PASS;

        if (adminEmail == email && adminPass == pass) {
            return {
                nombre: "Chaveli",
                email: adminEmail,
                role: "root",
            };
        } else {
            return false;
        }
    }
};

export { logIn };
