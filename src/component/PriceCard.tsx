import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import "./PriceCard.css"

function tagColor(priceChange: number) {
    if (priceChange > 0) {
        return <p style={{ color: "green", display: "flex", alignItems: "center" }}><BsCaretUpFill />{priceChange}%</p>
    } else if (priceChange < 0) {
        return <p style={{ color: "red", display: "flex", alignItems: "center" }}><BsCaretDownFill />{priceChange}%</p>
    } else {
        return <p>{priceChange}</p>
    }
}

function formatNumber(number: number) {
    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
export function PriceCard(item: { name: string; price:number ;icon: string,symbol:string;priceChange1h:number;
    priceChange1w:number;priceChange1d:number;totalSupply:number;marketCap:number;volume:number;index:number
}) {
    return (
        <>
            <tr>
                <td>{item.index+1}</td>
                <td>
                    <div className="d-flex align-items-center">
                        <img src={item.icon} alt="" />
                        <span className="coin-name ml-2 text-capitalize font-weight-bold font-size-20">{item.name}</span>
                        <span className="text-muted ml-2">{item.symbol}</span>
                    </div>
                </td>
                <td><div className="coin-item">{formatNumber(item.price)}</div></td>
                <td><div className="coin-item">{tagColor(item.priceChange1h)}</div></td>
                <td><div className="coin-item">{tagColor(item.priceChange1d)}</div></td>
                <td><div className="coin-item">{tagColor(item.priceChange1w)}</div></td>
                <td><div className="coin-item">{formatNumber(item.marketCap)}</div></td>
                <td><div className="coin-item">{formatNumber(item.volume)}</div></td>
                <td><div className="coin-item">{formatNumber(item.totalSupply)}</div></td>
            </tr>
        </>
    );
}