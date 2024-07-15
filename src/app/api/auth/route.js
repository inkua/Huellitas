import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/services/firebaseConfig";

export async function POST(req) {
    try {
        const { email, pass } = await req.json();
        const res = await signInWithEmailAndPassword(auth, email, pass);
        return Response.json({
            status: 200,
            data: await res.user.getIdToken(),
        });
    } catch (e) {
        return Response.json({ status: 403, data: e });
    }
}
