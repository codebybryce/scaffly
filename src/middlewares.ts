import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {getValidSubdomain} from "./utils/subdomain";
//import { getUserBySubdomain } from "./utils/user";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();
    if(PUBLIC_FILE.test(url.pathname) || url.pathname.includes('_next')) {
        return
    }

    const host = request.headers.get('host');
    const subdomain = getValidSubdomain(host);
    if(subdomain){
        console.log(`>>> Rewriting: ${url.pathname} to /${subdomain}${url.pathname}`);
        url.pathname = `/${subdomain}${url.pathname}`;
    }

    return NextResponse.rewrite(url);
}