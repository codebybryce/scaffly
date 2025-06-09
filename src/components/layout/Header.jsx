import { Header } from "antd/lib/layout/layout"
import { Button } from "antd"
import ScafflyLogo from "../../logo/scaffly"

export default function MainHeader() {

    return (
    <Header style={{ backgroundColor: "white", padding: "0 24px", flexDirection: "row", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #f0f0f0" }}>
        <ScafflyLogo />
        <div>
            <Button>Sign Up</Button>
            <Button style={{ marginLeft: 8 }}>Login</Button>
        </div>
    </Header>
    )
}