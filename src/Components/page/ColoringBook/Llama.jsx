import React, { useRef } from 'react'

const Llama = (props) => {
    const svgRef = useRef(null)
    const color = props.color

    const updateFill = (event) => {
        svgRef.current = event.target.attributes.id.value
        const target = document.getElementById(svgRef.current)
        target.setAttribute('fill', color)
    }

    return (
        <>
        <svg width="1158" height="1296">

            <g>
            <title>Layer 1</title>
            <g id="svg_1">
            <path id="svg_2" d="m1056.3,850.4c-4.1,-4.2 -5.1,-9.6 -6.2,-14.8c-3.2,-16.3 -6.2,-32.6 -11.9,-48.2c-2.1,-5.7 -4.5,-11.2 -6.9,-16.7c-0.6,-1.5 -1.5,-2.9 -2.6,-4.9c-1.9,14.4 -7.4,26.7 -14.2,38.8c1.3,2.4 3.9,3.3 6,4.8c2.7,1.9 5.5,3.5 8.2,5.4c3,2.3 4.7,5.4 4.5,9.3c-0.5,10.8 -2.1,21.3 -5.1,31.7c-0.1,0.3 -0.3,0.6 -0.4,0.9c-2.4,5.9 -5.4,7 -11.1,4.5c-0.4,-0.2 -0.9,-0.4 -1.5,-0.6c-0.4,3.2 -0.6,6.4 -1.4,9.5c-1,4.4 -2.1,8.9 -3.8,13.1c-3.3,8.4 -5,17.1 -7,25.9c-0.2,1.1 -0.1,2.3 -0.2,3.4c-0.3,6 -0.6,12.1 -1,18.1c-0.1,1.3 -0.5,2.6 -1.1,3.7c-1.4,2.6 -4,3.3 -6.7,1.9c-0.6,-0.3 -1.2,-0.6 -1.6,-1.1c-2.3,-3.1 -5.8,-4.4 -9,-6.8c-3.2,20.2 -9.4,39.6 -14.3,59.3c-2.3,9.2 -3.8,18.5 -4.3,27.9c-0.3,5.3 0.3,10.8 1.1,16.1c2.5,16.7 10.3,31.1 20.5,44.3c3,3.9 4.6,7.5 2.7,12.6c-1.2,3.1 -0.9,6.8 -1.5,10.1c-2.1,11.6 -5.6,22.7 -9.8,33.7c-6.6,17.4 -14.3,34.3 -22.5,51c-8.4,17 -16.9,33.9 -25.5,50.7c-6.5,12.8 -13.4,25.4 -22.3,36.8c-0.2,0.3 -0.5,0.4 -0.8,0.7c-14.1,0 -28.3,0 -42.5,0c0,-0.3 0,-0.5 -0.1,-0.8c3.6,-0.1 7.1,-0.2 10.7,-0.3c0,-0.3 0,-0.5 0,-0.8c-14.8,0 -29.6,0 -44.8,0c0.3,-1.4 0.5,-2.4 0.8,-3.2c5.5,-17.2 11,-34.4 16.4,-51.6c4.6,-14.6 8.3,-29.4 11.2,-44.4c1.5,-7.6 2.1,-15.5 3.3,-23.2c1.6,-10.6 1.1,-21.2 0.6,-31.8c-0.4,-9.9 -1.2,-19.8 -5.2,-29.1c-5.2,-12.1 -10.2,-24.3 -16,-36.2c-9,-18.5 -17.5,-37.2 -26.6,-55.6c-7.5,-15.2 -15.8,-30.1 -25.3,-44.1c-1.1,-1.6 -2.3,-3.1 -3.6,-4.8c-1.3,0.5 -2.4,0.7 -3.3,1.2c-29.2,14.2 -59.5,25.7 -90.6,34.8c-16.2,4.8 -32.7,8.7 -49.4,11.3c-10.1,1.6 -20.3,2.9 -30.5,4c-16.6,1.8 -33.3,2 -49.9,1.7c-8.5,-0.2 -16.9,-1.1 -25.4,-1.7c-5.7,-0.4 -11.4,-0.5 -17.1,-1.3c-13.2,-1.7 -26.4,-3.9 -39,-9.7c-0.6,1 -1.3,1.9 -1.6,2.9c-3.9,12.6 -8.1,25.1 -10.5,38.1c-1.5,8.3 -2.8,16.7 -2.5,25.2c0.2,5.2 0.2,10.5 0.2,15.7c-0.1,11.6 1.5,23 3.6,34.4c2,11.2 3.2,22.6 5.5,33.7c1.3,6.4 -0.4,12.3 -0.6,18.4c-0.1,6.3 -1.7,12.5 -2.4,18.8c-1.1,9.4 -4,18.4 -6.2,27.6c-2.7,11.5 -5.4,23.1 -8.8,34.5c-3.1,10.4 -7.1,20.6 -10.8,30.9c-0.6,1.7 -1.5,3.2 -2.5,5.2c-1.9,0 -3.6,0 -5.4,0c-20,0 -39.9,0 -59.9,0.1c-3.1,0 -6.2,0.2 -9.6,0.4c0.1,-0.9 0.1,-2 0.2,-3c0.1,-0.9 0.8,-2 0.5,-2.8c-1.2,-3.4 0.1,-6.6 1.5,-9.4c3.5,-7.1 4.9,-14.8 6.6,-22.4c1.3,-5.9 2.6,-11.7 3.4,-17.7c1.5,-11.7 2.4,-23.4 0.8,-35.1c-0.5,-3.7 -0.8,-7.4 -1.1,-11.2c-0.9,-10.9 -3.2,-21.5 -5.9,-32.1c-2.3,-8.8 -3.7,-17.8 -5.9,-26.6c-4.5,-17.5 -8.8,-35 -14.1,-52.3c-5.1,-16.5 -11.4,-32.6 -16.9,-48.9c-5.4,-16 -9.7,-32.4 -12.9,-49c-1.6,-8.3 -2.4,-16.7 -3.2,-25.1c-0.7,-6.9 -3.1,-12.9 -7.7,-18.1c-11.4,-12.6 -23,-25.1 -34,-38c-12.3,-14.4 -24.2,-29.1 -36,-43.9c-4.9,-6.1 -9,-12.9 -13.6,-19.1c-5.8,-7.8 -12.6,-14.6 -21.1,-19.5c-2.7,-1.5 -5.5,-2.8 -8.4,-3.9c-2.6,-1 -5,-0.6 -7.3,1.1c-1.4,1 -3,1.8 -4.2,2.5c-3.8,-0.7 -5,-2.8 -5,-6c-0.2,-8.8 -0.6,-17.6 -1,-26.4c-0.1,-1.6 0.2,-3.3 -1.5,-4.5c-3.1,4.4 -6.2,8.9 -12,10.4c-2.8,-0.8 -4.4,-3 -5.7,-5.5c-2.3,-4.2 -3.4,-8.8 -4.2,-13.5c-2.6,-16.2 -2.2,-32.5 -1.8,-48.9c0.1,-5.5 0.3,-11.1 0.9,-16.6c1.3,-11.7 0.9,-23.5 1.1,-35.2c0.1,-8.2 0.4,-16.3 0.6,-24.5c0.4,-15.2 0.7,-30.4 1.3,-45.6c0.4,-11.2 1.2,-22.5 1.9,-33.7c0.6,-9.3 1.2,-18.5 1.9,-27.8c0.9,-11.2 1.8,-22.4 2.9,-33.6c1.1,-10.5 2.4,-21 3.7,-31.5c2.3,-18.2 2.5,-36.5 1.9,-54.7c-0.2,-7 -1,-14 -1.7,-20.9c-0.5,-4.9 -1.7,-9.6 -3.7,-14.1c-3.7,-8.1 -10,-12.1 -18.8,-12.6c-15.1,-0.8 -29.8,1.6 -44.4,5.5c-5,1.4 -10.1,2.6 -15.3,3.1c-4.2,0.4 -8.5,-0.2 -12.6,-0.9c-4.3,-0.8 -8.5,-2.2 -12.7,-3.4c-4.7,-1.4 -8.4,-4.3 -12,-7.3c-8.6,-7.2 -15.5,-15.8 -20.9,-25.7c-2.5,-4.5 -5.8,-8 -10.2,-10.9c-5,-3.3 -9.3,-7.7 -13.9,-11.6c-3.6,-3 -4.3,-7 -2.8,-11.1c1.7,-4.6 3.6,-9.1 6.3,-13.2c3.2,-4.9 7.2,-9.3 10.8,-13.9c0.8,-1 1.6,-2.1 1.9,-3.3c1.4,-6.6 5.3,-11.9 9.5,-16.9c3.8,-4.5 8.2,-8.3 13.9,-10.5c4.1,-1.6 7.7,-4.3 11.7,-6.2c9.3,-4.4 18.7,-8.5 28,-12.8c18.9,-8.9 37.6,-18.2 54.4,-30.8c2.3,-1.7 3.9,-3.8 5.3,-6.3c5.7,-10.2 12.4,-19.6 19.9,-28.4c8.2,-9.6 18.1,-16.9 29.4,-22.4c11.3,-5.5 22.8,-10.4 35.3,-12.7c6.1,-1.1 12.2,-1.8 18.4,-2.3c2.7,-0.2 5.4,0.8 8.1,1.3c0.8,0.1 1.5,0.3 2.8,0.6c-1.1,-2.2 -1.8,-3.7 -2.6,-5.3c-3.3,-6.4 -6.2,-12.9 -8.2,-19.8c-3.4,-11.6 -2.1,-22.9 2.1,-34c4.8,-12.7 12,-23.9 22.3,-32.9c5.9,-5.2 12.7,-8.5 20.4,-10c2.9,-0.6 5.8,-0.2 8.7,0.7c14.4,4.3 18.1,11.9 19.9,23.1c1.7,10.1 0.5,20.1 -0.7,30.2c-0.8,6.8 -1.4,13.6 -2.2,20.4c-0.5,4.9 -1.2,9.7 -1.7,14.5c-0.2,2.1 -0.2,4.2 -0.4,6.7c3.6,-2.2 6.7,-4.2 9.9,-6c3.3,-1.8 6.7,-3.3 10,-5c6.1,-3.2 12.5,-4.7 19.3,-4.3c3.6,0.2 7.1,1.1 9.5,3.9c2.1,5.4 -3.3,7.9 -4.4,12.3c1.2,0.1 2.3,0.4 3.3,0.2c4.7,-1.1 9,0.1 13.2,2.1c14.9,7.2 25.9,18.4 34.2,32.6c5.3,9 10.1,18.3 13.9,28c4.3,11.1 8.6,22.2 12.5,33.4c2.6,7.3 5.8,14.1 11.3,19.8c2.7,2.8 5.1,5.9 7.5,8.6c0,3.1 -1.4,4.7 -3.7,5.7c-2.2,1 -4.6,1.6 -6.9,2.4c-1.4,0.5 -2.7,0.8 -4.6,1.4c3.7,5 5.7,10.3 6.9,15.9c0.2,1 0.5,1.9 0.6,2.8c1.2,12.4 1.3,24.8 0.8,37.2c-0.4,9.8 -1.3,19.5 -1.9,29.3c-0.7,10.4 -1.4,20.8 -2,31.2c-0.7,12.7 -1.3,25.4 -2,38.1c-0.4,7.2 -0.6,14.3 -1,21.5c-0.1,2.8 -0.8,5.5 -0.7,8.3c0.4,10.4 1,20.8 1.5,31.3c0.1,1.6 0.1,3.3 0.1,4.9c0,29.3 0,58.5 -0.1,87.8c0,5 -0.5,10.1 -0.8,15.4c1.2,1.3 2.4,2.5 3.5,3.7c10.5,1.1 20.8,1.2 31,0.3c2.8,-0.2 5.6,-0.1 8.3,-0.1c127.4,0 254.8,0 382.2,0c14.6,0 29.1,-0.1 43.7,0.1c10,0.1 19.9,0.5 30.1,0.8c1.3,1.1 2.8,2.3 4.3,3.5c4.3,-2.7 8.6,-5.2 12.7,-8.1c5.4,-3.7 11.5,-5.4 17.8,-6.2c5.2,-0.7 10.4,-0.9 15.6,-1.1c8.9,-0.4 17.4,1.9 26.1,3.4c13.5,2.4 25.6,8.4 37.4,15.2c15.4,8.8 30.5,18.2 46,26.9c8.7,4.8 17.8,8.9 26.8,13c1.7,0.8 4.1,0.1 6.9,0.1c0.4,0.3 1.3,1.1 2.2,1.9c-0.5,2 -0.9,3.7 -1.3,5.5c-6.5,4 -13.6,6.5 -21.8,8c1.3,1.4 2.1,2.4 3,3.2c15,12.7 24.5,28.6 27.9,48c1.6,8.8 2.9,17.7 2.8,26.7c-0.2,12.9 -2.4,25.6 -6.5,37.8c-6.8,20.5 -19.9,36.5 -36.3,50.1c-5.9,4.9 -12.2,9.3 -18.4,13.9c-1.7,1.3 -3.3,2.7 -4.9,4c-5.3,0.3 -5.5,0 -6.9,-8.7c-3.3,7.2 -6.5,13.8 -9.4,20.5c-2.4,5.5 -4.7,11.1 -6.6,16.8c-0.4,3 -3.2,4.3 -5.1,6.8zm-156.7,412c0.6,-1 1.3,-1.9 1.8,-2.9c9,-16.7 18.3,-33.2 26.8,-50.1c10.4,-20.7 20.4,-41.6 30,-62.7c9.1,-19.9 16.8,-40.2 20.1,-62.2c-0.2,-0.5 -0.5,-1.1 -0.9,-1.6c-0.6,-0.8 -1.2,-1.5 -1.9,-2.3c-10.3,-11.7 -17,-25.4 -21.3,-40.3c-1,-3.4 -1,-7.1 -1.6,-10.6c-1.4,-8.3 -1.4,-16.7 -0.4,-24.9c1.6,-13.7 5.3,-27.1 10.1,-40.1c1.5,-4 3.2,-7.8 4.3,-11.9c4.1,-14.6 5.8,-29.7 6.9,-45.1c1,-1 2,-2.2 2.7,-2.8c8,2.7 11,9.5 14.6,15.6c1.2,2 2.3,4.1 4,7.2c0.1,-2.7 0.2,-4.1 0.3,-5.6c0.3,-5 0.3,-10.2 1.1,-15.1c1.6,-9.3 3.4,-18.5 6.2,-27.6c1.6,-5.3 2.6,-10.7 3.3,-16.2c0.8,-6.2 -0.5,-12.3 -2.1,-18.3c-1.5,-5.8 -2.8,-11.7 -4,-17.6c-0.5,-2.2 0,-4.3 1.2,-6.5c3,2 4.7,4.6 5.9,7.5c1.7,4.2 3.4,8.5 4.9,12.7c1.5,4.2 4.7,6.7 8.4,9.8c2,-10.2 4.4,-19.6 4.4,-29.5c-1.4,-1.1 -2.5,-1.9 -3.7,-2.8c-4.5,-3.3 -9,-6.4 -13.4,-9.8c-3.7,-2.9 -4.6,-6.4 -3.1,-10.9c0.4,-1.1 1,-2.1 1.4,-3.1c2.6,-5.6 5.3,-11.2 7.8,-16.9c1,-2.2 2,-4.6 2,-7c0,-6.2 -0.1,-12.4 -1.1,-18.5c-2.4,-14.5 -6.7,-28.4 -12.3,-42.1c-7.2,-17.7 -15.9,-34.7 -24.1,-51.9c-10.2,-21.5 -20.5,-43 -30.7,-64.5c-2.1,-4.4 -4,-8.9 -6,-13.6c-2,0 -3.8,0 -5.6,0c-159.9,0 -319.9,0 -479.8,0c-4.7,0 -9.4,-0.6 -13.7,-0.9c-2.8,-2.7 -5.1,-5 -7.2,-7c-0.4,-4.4 -1.1,-8.3 -1.1,-12.2c-0.4,-29.9 -0.6,-59.8 -0.8,-89.7c0,-7 0.4,-14 0.6,-21c0.4,-14.7 0.7,-29.4 1.1,-44.1c0.2,-8 0.6,-16 1,-24c0.3,-6.2 0.6,-12.4 1,-18.6c0.6,-10.9 1.3,-21.8 2,-32.7c0.6,-8.6 1.4,-17.2 1.9,-25.8c0.5,-9.9 0.8,-19.9 1.2,-29.8c0.3,-7.1 -1.2,-13.9 -2.5,-20.8c-1.2,-6.2 -3.8,-11.4 -9.9,-14.2c-2.3,-1.1 -2.9,-3.2 -2.3,-5.4c0.5,-1.9 2,-3.1 4.5,-3c3.9,0.1 7.8,0.5 11.7,0.8c2.6,0.2 5.3,1 8.2,0c-1.4,-1.5 -2.4,-2.7 -3.6,-3.9c-5.5,-5.7 -9.6,-12.4 -12.6,-19.7c-3.9,-9.7 -7.7,-19.4 -11.3,-29.1c-4.5,-12.1 -9.7,-23.9 -16.9,-34.7c-7.5,-11.3 -17.1,-20.6 -29.4,-26.7c-8.7,-4.3 -18.2,-2.8 -25.4,3.7c-1.3,1.2 -2.7,2.5 -4.3,3.2c-2.3,1 -4.9,1.9 -7.4,2.2c-1.4,0.1 -3.2,-0.9 -4.3,-1.9c-0.7,-0.7 -0.6,-2.3 -0.8,-3.3c0.8,-0.7 1.1,-1.1 1.5,-1.4c3.7,-2 7.7,-3.7 9.3,-8.1c0,-0.1 0.2,-0.3 0.4,-0.3c3.2,-1.5 4.2,-4.9 6,-7.5c1.8,-2.6 3.5,-5.3 5.7,-8.6c-7,0 -13.1,0.8 -18.2,4.8c-4.3,3.4 -8.2,7.4 -12,11.4c-2.9,3 -5.4,6.2 -10.7,5.3c-0.9,6.5 -1.6,12.8 -1.8,19.1c-0.3,8.5 -1.7,15.9 -3.5,18.5c-0.3,-0.8 -0.8,-1.5 -1,-2.3c-3.2,-14.9 -1.4,-29.9 -0.8,-44.9c0.1,-3.4 0.5,-6.8 0.9,-10.2c0.8,-7 1.8,-13.9 2.6,-20.8c0.9,-7.9 1.2,-15.9 2.3,-23.8c1,-7 0.8,-14 -0.4,-20.9c-0.6,-3.2 -1.2,-6.7 -4.7,-9c-0.2,2.6 0.1,5 -0.5,7.1c-1.6,6.3 -3.2,12.6 -5.4,18.7c-5.2,14.7 -10.6,29.4 -16.1,44c-2.9,7.5 -6.4,14.8 -9.6,22.2c-0.9,-2.3 -0.5,-4.6 -1,-6.5c-1.6,-5.8 -0.4,-11.4 0.5,-17c1.8,-10.3 5.2,-20.1 8.7,-29.9c3.5,-9.8 6.7,-19.7 10,-29.5c0.7,-2.2 0.9,-4.4 0.2,-6.8c-7.1,-1.1 -13.1,1 -18.1,5.7c-8.8,8.4 -14.5,18.8 -18,30.4c-2.6,8.5 -2.1,17 0.7,25.4c3.8,11.3 8.6,22.1 14.4,32.5c3.6,6.4 6.9,13 10.3,19.5c0.9,1.8 1.6,3.6 0.5,5.6c-2.1,1 -3.5,0 -4.6,-1.5c-5.6,-8.2 -12.8,-15.2 -17.7,-24c-1.1,-1.9 -2.4,-3.8 -3.3,-5.1c-7.4,1.6 -14.1,3.2 -21,4.5c-18.9,3.6 -36.1,11 -51.4,22.7c-5.1,3.9 -9.8,8.1 -13.7,13.3c-6.4,8.5 -12.9,16.9 -19.5,25.2c-4.2,5.3 -8.8,10.1 -14.7,13.5c-18.6,10.8 -38.1,20 -57.8,28.6c-10,4.3 -19.8,9.1 -29.7,13.8c-6.7,3.2 -12.3,8 -17,13.7c-2.3,2.9 -4.5,5.9 -5.3,9.7c0.6,0.3 1.1,0.6 1.5,0.7c6.5,0.4 13,0 19.5,-1.3c6.4,-1.3 12.5,-3.5 18.5,-6c2.9,-1.2 6,-1.9 10.4,-2.1c-3.4,3 -5.7,5.7 -8.6,7.3c-9.9,5.7 -20.4,9.3 -32,9.1c-4.2,-0.1 -8.5,0 -13,0c-6,8.2 -12.7,16.1 -15.7,26.7c2.1,1.7 4.2,3.5 6.4,5.1c7.1,5.1 15.2,8.1 23.6,10.2c9.4,2.4 18.9,3.3 28.4,0c13.1,-4.6 24.6,-11.9 35.6,-19.9c0.4,-1.2 0.8,-2.1 1,-3c0.5,-2.3 2,-3.7 4.2,-4.3c1.7,-0.4 3.5,-0.9 5.3,-0.8c4.9,0.4 9.6,1.8 13.9,4.3c3.8,2.2 4.6,4.3 3.7,9.1c-2.5,2.9 -5.8,2.3 -9,1.6c-3.3,-0.8 -6.6,-1.8 -9.7,-2.7c-5.2,3.5 -10.1,6.7 -14.9,10.1c-9.3,6.6 -18.9,12.9 -29,18.2c-3.1,1.6 -6.3,2.6 -9.8,2.5c-2.1,-0.1 -4.3,0.1 -6.4,-0.1c-3.9,-0.4 -7.9,-0.9 -12.3,-1.5c6.3,9.8 13.8,17.7 23.5,23.1c6.5,3.6 13.7,5.3 21.2,4.7c4,-0.3 7.9,-1.6 11.9,-2.5c6,-1.4 12,-3 18,-4.2c5.1,-1 10.3,-1.5 15.4,-2.3c7.8,-1.2 15.6,-0.7 23.3,0.9c4.6,1 7.8,4.1 11.1,6.8c6.5,5.1 11.2,11.7 13.3,20c2.5,9.5 3.3,19.3 3.5,29c0.3,13.5 1,27.1 -0.7,40.6c-1,7.8 -1.5,15.6 -2.2,23.3c-0.9,9.4 -1.9,18.8 -2.7,28.2c-0.6,7.3 -0.8,14.7 -1.2,22c0,0.7 -0.1,1.3 -0.1,2c-0.6,7 -1.2,14 -1.7,20.9c-0.4,5.4 -0.6,10.7 -0.9,16.1c-0.4,9.1 -0.6,18.3 -1.2,27.4c-0.3,5.7 -1.2,11.3 -1.6,17c-0.4,5 -0.8,10.1 -1,15.1c-0.1,2.8 0.5,5.5 0.5,8.3c-0.1,8.8 -0.5,17.6 -0.6,26.4c-0.2,11.3 -1.1,22.5 -1.9,33.7c-0.7,8.9 -0.9,17.9 -1.1,26.9c-0.2,9.8 -0.2,19.6 0,29.4c0.1,5.5 0.6,11.1 1.1,16.6c0.2,2.1 0.8,4.2 1.3,6.7c2.6,-2.5 3.6,-5.2 4.6,-8c1.6,-4.5 3.3,-8.9 4.5,-13.4c0.7,-2.6 2.1,-4.2 4.4,-5.1c2.8,1.7 4,4.3 4.4,7c0.9,6.1 1.7,12.3 2.1,18.4c0.6,8.3 0.7,16.6 1.1,24.9c0,0.5 0.3,0.9 0.5,1.6c1.1,0 2.2,0.1 3.3,0c5.4,-0.5 10.4,1.1 15,3.6c10.8,6 20.2,13.8 27.9,23.6c6.4,8.2 12.5,16.7 19.2,24.7c7,8.4 14.3,16.6 21.8,24.5c11.8,12.3 24.5,23.6 35.6,36.5c7.3,8.4 14.6,16.7 21.2,25.6c2.4,3.2 3.5,6.4 3.4,10.3c-0.1,11.4 0.3,22.9 2.9,34.1c2.7,12 5.8,24 9.2,35.9c5.8,19.8 12.2,39.5 18.1,59.2c4.8,15.9 9,31.9 12,48.2c3,16.3 5.4,32.7 8.1,49.1c1.7,10.1 2.8,20.3 3,30.6c0.2,13.6 -0.2,27.1 -3,40.4c-1.1,5.2 -2.1,10.5 -3.1,15.8c3.1,5.9 8.9,10.2 9.3,17.5c12.7,0 25,0 37.5,0c0.5,-1 1,-1.9 1.3,-2.8c3.5,-10.1 7.3,-20.2 10.5,-30.5c5,-16 11.1,-31.6 13.8,-48.3c1.4,-8.8 3.4,-17.6 3.5,-26.6c0,-4.2 0.5,-8.4 0.7,-12.7c0,-0.6 0,-1.3 -0.1,-1.9c-2.1,-11.5 -4.3,-23 -6.3,-34.5c-0.9,-5.3 -1.8,-10.6 -2.2,-15.9c-0.5,-7.6 -0.8,-15.3 -0.8,-23c0,-8 0.5,-16 0.8,-24c0,-0.3 0,-0.7 0.1,-1c1.2,-10 3.5,-19.9 6.6,-29.5c5.3,-16.2 9.6,-32.8 15.5,-48.8c5.7,-15.7 8.4,-32 9.3,-48.7c0.2,-3.9 0.7,-8 2.8,-12.5c0.9,2 1.5,3.2 2,4.5c3.5,9.3 3.2,18.9 1.7,28.4c-1.8,11.1 -4.4,22 -7.8,32.7c-0.3,1 -0.6,2.1 -0.9,3.3c1.1,0.5 1.9,1 2.8,1.3c14.7,5.8 30.3,7.4 45.8,8.7c9.6,0.8 19.2,0.8 28.9,1.2c0.7,0 1.3,0 2,0.1c13.2,1.4 26.5,0.8 39.7,0.5c8.3,-0.2 16.6,-1.2 24.9,-1.6c8.8,-0.5 17.5,-1.6 26,-3.6c14.4,-3.4 28.6,-7.5 42.8,-11.9c23,-7.2 45.6,-15.5 67.5,-25.7c6.2,-2.9 12.4,-5.8 18.1,-8.5c1.5,0.6 2.8,1.4 3.9,1.4c4.1,-0.3 7,1.8 9.3,4.6c3.4,4.1 6.7,8.4 9.6,13c9.5,15 17.8,30.8 25.5,46.8c11.8,24.4 23.2,48.9 30.7,75c2.3,8.1 7.2,15.3 7.8,24c0.6,7.4 2.7,14.8 3,22.2c0.5,11.7 1.1,23.5 -0.7,35.2c-1.4,9.3 -2.2,18.8 -4.4,27.9c-3.8,16 -8.4,31.8 -12.7,47.6c-1,3.7 -2.2,7.4 -3.4,11.4c3.7,0.2 5.2,2.4 6.6,5c1.4,2.6 2.9,5.1 4.3,7.7c1.5,2.7 2.8,5.5 4.3,8.3c11.2,0.6 21.8,0.6 33,0.6zm188,-459.5c7.5,-5.5 14.4,-10.3 21.1,-15.6c4.2,-3.3 8.4,-6.9 11.7,-11c5.1,-6.3 9.7,-13.1 14.2,-19.9c2.8,-4.2 4.9,-8.8 5.5,-13.9c0.2,-1.8 0.6,-3.5 0.8,-5.3c0.8,-7.4 1.8,-14.9 2.3,-22.3c0.5,-8.3 -0.8,-16.6 -1.8,-24.8c-1.2,-9.1 -3.6,-17.8 -7.5,-26.1c-6.4,-13.7 -17.8,-22.7 -29.5,-31.4c-2.5,-1.9 -3.6,-3.3 -3.2,-5.5c0.4,-2.2 2.5,-3.8 5.4,-4.1c3.2,-0.4 6.5,-0.7 9.7,-1.2c1.1,-0.2 2.1,-0.8 3.6,-1.4c-3.2,-1.6 -5.8,-2.9 -8.5,-4.1c-15.4,-7.2 -29.4,-17 -44.3,-25c-9.6,-5.2 -19.2,-10.5 -29.4,-14.3c-11.2,-4.1 -22.8,-6.5 -34.7,-7.4c-7.1,-0.5 -13.9,0.2 -20.8,1.2c-9.1,1.3 -16.1,6.7 -23.1,12c-0.6,0.4 -0.9,1.2 -1.4,1.8c6.2,13.2 12.2,26.3 18.4,39.2c10.9,22.8 22.1,45.5 32.9,68.3c6.8,14.3 12.2,29.1 16,44.6c6.9,6.9 11.8,15.2 16.2,23.8c8.6,16.8 14.4,34.5 17.9,53c0.5,2.5 0.1,5.5 2,8.1c0.7,-0.9 1.3,-1.5 1.6,-2.2c4.3,-9 8.7,-17.9 12.8,-26.9c2.3,-5 4.1,-10.3 5.9,-15.5c0.7,-2.2 2.1,-3.2 4.5,-3.7c1,0.7 2.2,1.5 3.6,2.5c-0.7,8.5 -1.3,17.3 -1.9,27.1z"/>
            <path id="svg_3" d="m200.3,207.6c2.8,1.9 3.8,4.3 4.9,6.5c5,10.5 7.3,21.5 5,33.2c-0.3,1.7 -0.4,3.6 -0.9,5.3c-1.1,3.8 -1.2,3.8 -5.6,5.7c-7.2,-2.8 -13.1,-7.1 -16.9,-14.4c-3.5,-6.6 -7.4,-12.9 -9.5,-20.3c-2,-7.1 -3.1,-14.3 -2.7,-21.7c0.2,-3.7 1.4,-6.6 4.6,-8.7c4.1,-1.1 7.6,-0.2 10.8,3.1c-0.5,0.7 -0.8,1.8 -1.6,2.2c-5.6,2.8 -5.8,7.9 -3.8,13.1c1.8,4.5 4.4,8.8 8.2,12c2,1.7 4.2,3.1 7.3,2.2c1,-2.9 3.5,-5.5 2.9,-9c-0.4,-2.8 -1.6,-5.6 -2.7,-9.2z" onClick={updateFill}/>
            <path id="svg_4" d="m313.8,296.3c0.4,4.7 0.9,9.2 1.2,13.8c0.2,2.6 -0.8,4.8 -2.1,6.9c-1.1,1.7 -2.5,3 -5,2.4c-1.3,-1.9 -1.3,-4.2 -1.4,-6.4c-0.2,-3.4 -0.6,-6.8 -1.3,-10.1c-0.7,-3.4 -2.8,-5.8 -5.9,-7.4c-2.1,-1.2 -4.2,-2.5 -6.2,-3.9c-2.2,-1.6 -2.9,-3.2 -2.2,-4.9c0.8,-2 2.3,-3.2 4.5,-3.2c1.3,0 2.6,0.1 3.9,0.4c1.1,0.3 2.1,0.8 3.2,1.2c5,2.2 9.8,2.2 14.5,-1.4c-0.1,-1.9 -1.5,-3 -2.7,-4.2c-5.4,-5.3 -10.3,-10.9 -13.4,-17.9c-0.8,-1.9 -1.6,-3.9 -2.1,-6c-0.4,-1.7 0.1,-3.3 2.1,-3.7c2.2,0.4 2.8,2.2 3.8,3.6c3.6,4.9 7.1,9.7 10.9,14.4c3.4,4.2 7.4,7.8 12.1,10.5c1.1,0.6 2,1.6 3.1,2.5c-3,8 -9.1,11.7 -17,13.4z" onClick={updateFill}/>
            </g>
            <rect id="svg_23" height="48.56551" width="245.68436" y="393.30175" x="188.04943" stroke="#000" fill="#fff" onClick={updateFill}/>
            <rect id="svg_24" height="37.13833" width="251.39795" y="453.29445" x="180.90744" stroke="#000" fill="#fff" onClick={updateFill}/>
            <rect id="svg_25" height="34.28154" width="254.25475" y="511.85874" x="178.05064" stroke="#000" fill="#fff" onClick={updateFill}/>
            <rect id="svg_27" height="55.7075" width="764.19264" y="583.27862" x="176.62225" stroke="#000" fill="#fff" onClick={updateFill}/>
            <rect id="svg_28" height="54.2791" width="772.76303" y="657.55529" x="173.76545" stroke="#000" fill="#fff" onClick={updateFill}/>
            <rect id="svg_29" height="42.85192" width="795.61739" y="733.26035" x="199.47661" stroke="#000" fill="#fff" onClick={updateFill}/>
            <rect id="svg_30" height="37.13833" width="739.90989" y="788.96785" x="249.47052" stroke="#000" fill="#fff" onClick={updateFill}/>
            <rect stroke="#000" id="svg_31" height="45.70872" width="679.91719" y="838.96177" x="313.74841" fill="#fff" onClick={updateFill}/>
            <rect id="svg_32" height="18.56917" width="75.70507" y="139.047" x="198.04821" stroke="#000" fill="#fff" onClick={updateFill}/>
            <rect id="svg_33" height="21.42596" width="72.84827" y="139.047" x="322.31879" stroke="#000" fill="#fff" onClick={updateFill}/>
            <rect id="svg_34" height="24.28276" width="214.25962" y="169.04335" x="188.04943" stroke="#000" fill="#fff" onClick={updateFill}/>
            <rect id="svg_35" height="25.71115" width="199.97565" y="209.03848" x="216.61738" stroke="#000" fill="#fff" onClick={updateFill}/>
            <rect id="svg_36" height="31.42474" width="134.26936" y="273.31637" x="146.6259" stroke="#000" fill="#fff" onClick={updateFill}/>
            <rect id="svg_37" height="34.28154" width="95.70263" y="276.17316" x="338.03116" stroke="#000" fill="#fff" onClick={updateFill}/>
            <rect id="svg_38" height="27.13955" width="241.39917" y="329.02387" x="193.76302" stroke="#000" fill="#fff" onClick={updateFill}/>
            <rect id="svg_39" height="11.42718" width="231.40039" y="371.87579" x="196.61981" stroke="#000" fill="#fff" onClick={updateFill}/>
            <rect id="svg_40" height="48.56551" width="124.27058" y="907.52484" x="348.02994" stroke="#000" fill="#fff" onClick={updateFill}/>
            <rect id="svg_41" height="21.42596" width="109.9866" y="976.08792" x="353.74353" stroke="#000" fill="#fff" onClick={updateFill}/>
            <rect id="svg_42" height="81.41866" width="57.1359" y="1017.51145" x="386.59667" stroke="#000" fill="#fff" onClick={updateFill}/>
            <rect id="svg_43" height="31.42474" width="225.6868" y="907.52484" x="518.00924" stroke="#000" fill="#fff" onClick={updateFill}/>
            <rect id="svg_44" height="32.85314" width="141.41135" y="911.81003" x="815.11591" stroke="#000" fill="#fff" onClick={updateFill}/>
            <rect id="svg_45" height="27.13955" width="111.415" y="958.94715" x="833.68508" stroke="#000" fill="#fff" onClick={updateFill}/>
            <rect id="svg_46" height="28.56795" width="87.13225" y="1007.51266" x="855.11104" stroke="#000" fill="#fff" onClick={updateFill}/>
            <rect id="svg_47" height="34.28154" width="82.84705" y="1056.07818" x="872.25181" stroke="#000" fill="#fff" onClick={updateFill}/>
            <rect id="svg_48" height="48.56551" width="55.7075" y="1110.35728" x="889.39258" stroke="#000" fill="#fff" onClick={updateFill}/>
            <rect id="svg_49" height="38.56673" width="25.71115" y="1196.06113" x="879.3938" stroke="#000" fill="#fff" onClick={updateFill}/>
            <rect id="svg_50" height="85.70385" width="29.99635" y="1136.06844" x="410.87943" stroke="#000" fill="#fff" onClick={updateFill}/>
            <ellipse ry="13.56978" rx="35.70994" id="svg_51" cy="249.74781" cx="139.48391" stroke="#000" fill="#fff" onClick={updateFill}/>
            <ellipse ry="7.14199" rx="22.85436" id="svg_52" cy="317.59669" cx="133.77032" stroke="#000" fill="#fff" onClick={updateFill}/>
            <path id="svg_53" d="m987.23812,623.97621l34.9957,-49.27972l34.9957,49.27972l-34.9957,49.27972l-34.9957,-49.27972z" stroke="#000" fill="#fff" onClick={updateFill}/>
            <path id="svg_57" d="m1051.23761,662.30012l31.42477,-42.13774l31.42477,42.13774l-31.42477,42.13774l-31.42477,-42.13774z" stroke="#000" fill="#fff" onClick={updateFill}/>
            <path id="svg_59" d="m1044.13116,733.30574l27.85379,-30.71055l27.85379,30.71055l-27.85379,30.71055l-27.85379,-30.71055z" stroke="#000" fill="#fff" onClick={updateFill}/>
            </g>
            </svg>

        </>
    )
}

export default Llama