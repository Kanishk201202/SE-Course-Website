import React from 'react'
import Navigationbar2 from '../components/Navigationbar2'
export default function HostelinventoryG() {
  return (
    <>
    {/*Navigation bar for navigating */}
    <Navigationbar2/>
    <br/>
    <h2>Hostel Inventory</h2>
    <br/>
    {/*Table for Inventory */}
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Hostel Inventory</th>
          <th scope="col">Hostel A</th>
          <th scope="col">Hostel B</th>
          <th scope="col">Hostel c</th>
          <th scope="col">Hostel D</th>
          <th scope="col">Hostel F</th>
          <th scope="col">Hostel G</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Chairs</th>
          <td>193</td>
          <td>198</td>
          <td>187</td>
          <td>140</td>
          <td>86</td>
          <td>150</td>
        </tr>
        <tr>
          <th scope="row">Cupboards</th>
          <td>196</td>
          <td>186</td>
          <td>189</td>
          <td>146</td>
          <td>75</td>
          <td>147</td>
        </tr>
        <tr>
          <th scope="row">Study Tables</th>
          <td>195</td>
          <td>185</td>
          <td>190</td>
          <td>130</td>
          <td>77</td>
          <td>169</td>
        </tr>
        <tr>
          <th scope="row">Beds</th>
          <td>188</td>
          <td>178</td>
          <td>176</td>
          <td>126</td>
          <td>71</td>
          <td>189</td>
        </tr>
        <tr>
          <th scope="row">Washing Machines</th>
          <td>4</td>
          <td>4</td>
          <td>4</td>
          <td>4</td>
          <td>6</td>
          <td>10</td>
        </tr>
        <tr>
          <th scope="row">Water Filters</th>
          <td>4</td>
          <td>4</td>
          <td>4</td>
          <td>4</td>
          <td>6</td>
          <td>15</td>
        </tr>
      </tbody>
</table>
</>
  )
}
