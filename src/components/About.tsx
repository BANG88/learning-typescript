import * as React from "react";
interface AboutProps extends JSX.IntrinsicAttributes {
    /**
     * description for **you** 
     */
    description?: string
}
/**
 * About 
 */
export default (props: AboutProps) => <div>
    <h3>About me</h3>
    <p>{props.description}</p>
</div>;