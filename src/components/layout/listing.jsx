import React from 'react';
import '../../assets/css/listing.css';
import Button from '../basics/button';

export default function Listing( ) {
  return (
    <div className="listing">
        <h2>FIND YOUR DREAM HOME</h2>
        <div className="design">
        <form className="listing-form">
            <div className="group">
                    <label htmlFor="name">LOCATION :</label>
                    <input type="text" id="name" name="name" required />
                <div className="content">
                <label htmlFor="BEDROOM">BEDROOMS</label>
                    <select id="price" name="Price" required >
                        <option value="0">1</option>
                        <option value="100000">2</option>
                        <option value="200000">3</option>
                        <option value="300000">4</option>
                    </select>
                    <label htmlFor="BATHS">BATHS</label>
                    <select id="price" name="Price" required >
                        <option value="0">1</option>
                        <option value="100000">2</option>
                        <option value="200000">3</option>
                        <option value="300000">4</option>
                    </select>
                </div>
            </div>
            <div className="group">
                <label htmlFor="name">TYPE :</label>
                <input type="text" id="name" name="name" required />
                <div className="content">
                    <label htmlFor="email">MIN</label>
                    <select id="price" name="Price" required >
                        <option value="0">$0</option>
                        <option value="100000">$100,000</option>
                        <option value="200000">$200,000</option>
                        <option value="300000">$300,000</option>
                        <option value="400000">$400,000</option>
                        <option value="500000">$500,000</option>
                    </select>
                    <label htmlFor="email">MAX</label>
                    <select id="price" name="Price" required >
                        <option value="0">$0</option>
                        <option value="100000">$100,000</option>
                        <option value="200000">$200,000</option>
                        <option value="300000">$300,000</option>
                        <option value="400000">$400,000</option>
                        <option value="500000">$500,000</option>
                    </select>
                </div>
            </div>
            <div className="group">
                <label htmlFor="name">SORT :</label>
                <input type="text" id="name" name="name" required />
                <Button className={'btn-primary'} label={'Submit'} />
            </div>
        </form>
        </div>
    </div>
    
  );
}