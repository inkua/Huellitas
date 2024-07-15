import {
    getRef,
    formatData,
    addElement,
    putElement,
    delElement,
} from "../services";

export async function GET() {
    try {
        const ref = await getRef("adopciones");
        return Response.json(formatData(ref));
    } catch (e) {
        return Response.json({ msg: e });
    }
}

export async function POST(req) {
    try {
        const { token, data } = await req.json();
        // Use token to validate request

        const res = await addElement(data, "adopciones");
        return Response.json({ status: 200, data: res });
    } catch (e) {
        console.log(e);
        return Response.json({ status: 403, data: e });
    }
}

export async function PUT(req) {
    try {
        const { token, id, data } = await req.json();
        // Use token to validate request

        const res = await putElement(data, id, "adopciones");
        return Response.json({ status: 200, data: res });
    } catch (e) {
        console.log(e);
        return Response.json({ status: 403, data: e });
    }
}

export async function DELETE(req) {
    try {
        const { token, id } = await req.json();
        // Use token to validate request

        const res = await delElement(id, "adopciones");
        return Response.json({ status: 200, data: res });
    } catch (e) {
        console.log(e);
        return Response.json({ status: 403, data: e });
    }
}
