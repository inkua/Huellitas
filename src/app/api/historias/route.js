import {
    getRef,
    formatData,
    addElement,
    putElement,
    delElement,
    delImage,
} from "../services";

export async function GET() {
    try {
        const ref = await getRef("historias");
        return Response.json(formatData(ref));
    } catch (e) {
        return Response.json({ msg: e });
    }
}

export async function POST(req) {
    try {
        const { token, data } = await req.json();
        // Use token to validate request

        const res = await addElement(data, "historias");
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

        const res = await putElement(data, id, "historias");
        return Response.json({ status: 200, data: res });
    } catch (e) {
        console.log(e);
        return Response.json({ status: 403, data: e });
    }
}

export async function DELETE(req) {
    try {
        const { token, item } = await req.json();
        // Use token to validate request

        await delImage(item.data.imagen);
        const res = await delElement(item.id, "historias");
        return Response.json({ status: 200, data: res });
    } catch (e) {
        console.log(e);
        return Response.json({ status: 403, data: e });
    }
}
