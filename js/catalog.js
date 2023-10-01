class Catalog
{
	constructor()
	{
		this.products=
		[
			{id:1,name:"Surface Pro Laptop",  code:"surface",	 image:"surface.jpg",	description:"LG Electronics 49UK6300PUE 49-Inch 4K Ultra HD Smart LED TV (2018 Model)."		,price:1200.99},
			{id:2,name:"Dell Insprion 15 3000", code:"", image:"dell.jpg"	,description:"Sony XBR55X900F 55-Inch 4K Ultra HD Smart LED TV with Alexa Compatibility "	,price:1555.69},
			{id:3,name:"HP - Pavilion x360 2-in-1", code:"hp", image:"hp.jpg"	,description:"Sony XBR55X900F 55-Inch 4K Ultra HD Smart LED TV with Alexa Compatibility "	,price:999.99},
			{id:4,name:"Asus Zenbook 13", code:"asus", image:"asus.jpg"	,description:"Sony XBR55X900F 55-Inch 4K Ultra HD Smart LED TV with Alexa Compatibility "	,price:1300.99}
		];	
	}
	getItem(code)
	{
		 for (let i=0; i<this.products.length; i+=1)
		 {
			 if(this.products[i].code==code) return this.products[i];
		 } 
		 return null;
	}
	findItem(code)
	{
		for (let i=0; i<this.products.length; i+=1)
		{
			 if(this.products[i].code==code) return true;
		} 
		 return false;
	}
	getItems()
	{
		return this.products;
	}
}
