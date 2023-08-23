import React from 'react'
import { SVGAttributes } from 'react'

type Props = {

} & SVGAttributes<SVGElement>

const PowerIcon: React.FC<Props> = (props) => (
    <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.707,10.658a1,1,0,0,1,0,1.414l-8.7,8.7A7.622,7.622,0,0,1,3.232,9.989L9.611,3.611a1,1,0,1,1,1.414,1.414L4.646,11.4A5.622,5.622,0,0,0,12.6,19.354l8.7-8.7A1,1,0,0,1,22.707,10.658ZM11.335,12.664a3.838,3.838,0,1,1-5.427,0A3.842,3.842,0,0,1,11.335,12.664ZM9.921,14.078a1.838,1.838,0,1,0-2.6,2.6,1.88,1.88,0,0,0,2.6,0A1.84,1.84,0,0,0,9.921,14.078ZM18.293,1.293l-7.7,7.7A1,1,0,1,0,12.011,10.4l7.7-7.7a1,1,0,0,0-1.414-1.414Zm-2,9.414a1,1,0,0,0,1.414,0l4-4a1,1,0,1,0-1.414-1.414l-4,4A1,1,0,0,0,16.293,10.707ZM4,5A1,1,0,1,0,3,6,1,1,0,0,0,4,5ZM21,19.5A1.5,1.5,0,1,0,19.5,21,1.5,1.5,0,0,0,21,19.5Z" />
    </svg>
)

export default PowerIcon