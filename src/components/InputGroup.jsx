import UserInput from "./UserInput";

export default function InputGroup(){
    return(
        <section id="input-group">
            <UserInput title="Initial Investment"/>
            <UserInput title="Anual Investment"/>
            <UserInput title="Expected Return"/>
            <UserInput title="Duration"/>
        </section>
    )
}