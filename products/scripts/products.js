

let types_garden = ['Planters', 'Garden & Utility', 'Outdoor Living', 'Furniture', 'Plants & Flowers'];

function types() {
    let div = document.createElement('div');
    types_garden.map(function (el) {
        let a1 = document.createElement('a');
        a1.setAttribute('class', 'left-link');
        a1.textContent = el;
        a1.href = '';
        
        div.append(a1);
    });
    document.getElementById('left-side').append(div);

};
types();

let prod_arr = [
    {
        id: 1,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/B45246403AA_014_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/B45246403AA_014_b2?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Peacock Ottoman',
        price: '498.00',
    },
    {
        id: 2,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/45246403AA_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/45246403AA_001_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',
        name: 'Peacock Daybed',
        price: '998.00',
    },
    {
        id: 3,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/56046469_014_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/56046469_014_b3?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Plumage Indoor/Outdoor Rattan Chair',
        price: '998.00',
    },
    {
        id: 4,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/A45246403AA_014_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',
        img2: 'https://images.urbndata.com/is/image/Anthropologie/A45246403AA_014_b2?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Peacock Cabana Daybed',
        price: '1998.00',
    },
    {
        id: 5,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/45549367-0000-SC0006_b?$a15-mto-tile$&hei=523&wid=349&qlt=80&fit=constrain',


        img2: 'https://images.urbndata.com/is/image/Anthropologie/45549367-0000-SC0006_b3?$a15-mto-tile$&hei=523&wid=349&qlt=80&fit=constrain',

        name: 'Barwick Indoor/Outdoor Swivel Chair',
        price: '1498.00',
    },
    {
        id: 6,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/49812944_006_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/49812944_006_b2?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Ingrid Chair ',
        price: '298.00',
    },
    {
        id: 7,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/67118968_014_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/67118968_014_b2?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Pari Rattan Bench',
        price: '798.00',
    },
    {
        id: 8,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/64536832_030_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/64536832_030_b2?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Fauna Doormat',
        price: '42.00',
    },
    {
        id: 9,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/45549319AA_066_b10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/45549319AA_066_b?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Mesa Pot',
        price: '24.00',
    },
    {
        id: 10,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/64741697_030_b10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/64741697_030_b?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Nadya Ribbed Watering Can',
        price: '32.00',
    },
    {
        id: 11,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/65469827_030_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/65469827_030_b2?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Metal Toolbox',
        price: '78.00',
    },
    {
        id: 12,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/66589185_018_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/66589185_018_b2?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Business & Pleasure Co. Cooler',
        price: '79.00',
    },
    {
        id: 13,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/65469447_000_b10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/65469447_000_b?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Blossom Seed Kit',
        price: '8.00',
    },

    {
        id: 14,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/65469264_030_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/65469264_030_b?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Metal Stem Stripper',
        price: '16.00'

    },
    {
        id: 15,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/45548989AA_014_b10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/45548989AA_020_b10?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Yuma Pot',
        price: '58.00'

    },
    {
        id: 16,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/63499438_030_b10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/63499438_030_b?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Persona Bouquet Gift Set',
        price: '68.60'

    },
    {
        id: 17,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/64554603_010_b10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/64554603_010_b?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Terra Garden Pot',
        price: '24.00'

    },
    {
        id: 18,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/61914230_000_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/61914230_000_b2?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Recycled Sari + Seagrass Bird Nest, Raindrop',
        price: '46.00'

    },
    {
        id: 19,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/65816787_050_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/65816787_050_b?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Gather Dried Bouquet',
        price: '42.00'

    },
    {
        id: 20,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/63300768_004_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/63300768_004_b?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Gabriella Pot',
        price: '33.60'

    },
    {
        id: 21,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/63300784_004_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/63300784_004_b2?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Michaelo Grecian Bust Pot',
        price: '42.00'

    },
    {
        id: 22,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/64565658_014_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/64565658_014_b2?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Cece Log Holder Basket',
        price: '128.00'

    },
    {
        id: 23,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/66149816_010_b10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/66149816_010_b?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Business & Pleasure Co. Tommy Beach Chair',
        price: '298.00'

    },
    {
        id: 24,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/64594757_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/64594757_001_b2?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Un Caffe Indoor/Outdoor Bistro Chair',
        price: '248.00'

    },
    {
        id: 25,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/61537411_014_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/61537411_014_b2?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Checkered Rope Indoor/Outdoor Bench',
        price: '648.00'

    },
    {
        id: 26,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/45548890AA_046_b10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/45548890AA_046_b?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Tinted Glass Cloche',
        price: '22.0'

    },
    {
        id: 27,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/63052070_001_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/63052070_001_b3?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Fired Black Terracotta Planter, Amphora',
        price: '98.00'

    },
    {
        id: 28,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/53712709_028_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/53712709_028_b2?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Haws Copper Plant Mister',
        price: '38.00'

    },
    {
        id: 29,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/63051957_001_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/63051957_001_b3?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Fired Black Terracotta Planter, Tall',
        price: '128.00'

    },
    {
        id: 30,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/62286497_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/62286497_001_b2?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Preserved Phalaris Bunch',
        price: '20.00'
    },
    {
        id: 31,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/62290192_095_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/62290192_095_b2?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Preserved Mushroom Stems, Set of 3',
        price: '38.00'

    },
    {
        id: 32,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/62289855_048_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/62289855_048_b2?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Preserved Floral Buttons',
        price: '20.00'

    },
    {
        id: 33,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/62289517_048_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/62289517_048_b2?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Preserved Avena Bunch',
        price: '28.00'

    },
    {
        id: 34,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/64328750_066_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/64328750_066_b?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Sunday Riley SPF 30 Light Hearted Broad Spectrum Sunscreen',
        price: '35.00'

    },
    {
        id: 35,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/62290259_072_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/62290259_072_b2?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Dried Yarrow Bunch',
        price: '28.00'

    },
    {
        id: 36,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/61059200_018_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/61059200_018_b?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Zinnia Outdoor Daybed Cushion',
        price: '1398.00'

    },
    {
        id: 37,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/61059333_004_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/61059333_004_b2?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Sunny Outdoor Daybed Cushion',
        price: '1398.00'

    },
    {
        id: 38,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/62955513_060_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/62955513_060_b2?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Geo Triangle Outdoor Daybed Cushion',
        price: '1398.00'

    },
    {
        id: 39,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/61882056_004_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/61882056_004_b2?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Strawberry Thief Indoor/Outdoor Side Table',
        price: '328.00'

    },
    {
        id: 40,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/45217522AA_095_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/45217522AA_095_b?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Handwoven Novah Indoor/Outdoor Rug',
        price: '38.40'

    },
    {
        id: 41,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/60458189_000_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/60458189_000_b2?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Mesa Teak Chair',
        price: '598.00'

    },
    {
        id: 42,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/63115869_048_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/63115869_048_b10?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Frankies Bikinis Everyday SPF 30 Mineral Sunscreen',
        price: '45.00'

    },
    {
        id: 43,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/63547053_270_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/63547053_270_b?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Grown Alchemist SPF 30 Naturally Hydrating Sunscreen',
        price: '39.00'
    },

    {
        id: 44,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/60728888_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/60728888_015_b?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Woven Bamboo Placemats, Set of 4',
        price: '30.00'
    },
    {
        id: 45,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/51551133_000_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/51551133_000_b?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Palladio Oval Back Armchair',
        price: '598.00'
    },

    {
        id: 46,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/51521441_111_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/51521441_111_b2?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Twisted Ladder Branch',
        price: '38.00'
    },

    {
        id: 47,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/60764891_050_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/60764891_050_b?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Sunny Florals Picnic Blanket',
        price: '70.40'
    },

    {
        id: 48,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/45246407AA_046_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/45246407AA_046_b2?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Hourglass Indoor/Outdoor Coffee Table',
        price: '298.00'
    },

    {
        id: 49,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/61414207_028_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/61414207_028_b2?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Copper Plant Tray',
        price: '48.00'
    },
    {
        id: 50,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/51521466_010_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/51521466_010_b2?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Bleached Cara Blossom Bunch',
        price: '38.00'
    },

    {
        id: 51,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/61432480_040_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/61432480_040_b2?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Dried Eryngium Bunch ',
        price: '28.00'
    },

    {
        id: 52,
        img1: 'https://images.urbndata.com/is/image/Anthropologie/55848873_005_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960',

        img2: 'https://images.urbndata.com/is/image/Anthropologie/55848873_005_b2?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698',
        name: 'Vista Slatted Teak Outdoor Sofa Cushions, Set of 2',
        price: '650.00'
    },

];


let productDiv = document.getElementById('products');
appendData(prod_arr);

function allSort() {
    let str = document.getElementById('sort').value;


    if (str === 'L') {
        prod_arr.sort(function (a, b) {
            return (Number(a.price) - Number(b.price));
        });
    }

    if (str === 'H') {
        prod_arr.sort(function (a, b) {
            return (Number(b.price) - Number(a.price));
        });
    }

    if (str === 'A') {
        prod_arr.sort(function (a, b) {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
        });
    }

    if (str === 'Z') {
        prod_arr.sort(function (a, b) {
            if (a.name < b.name) return 1;
            if (a.name > b.name) return -1;
            return 0;
        });
    }

    appendData(prod_arr)
}



function appendData(data) {
    productDiv.innerHTML = "";
    data.map(function (e) {

        let div = document.createElement('div');
        div.addEventListener('click', function () {
            showToPage(e);
        })

        let img1 = document.createElement('img');
        img1.src = e.img1;

        img1.onmouseover = () => {
            img1.src = e.img2;
        }

        img1.onmouseout = () => {
            img1.src = e.img1;
        }



        let p1 = document.createElement('p');
        p1.setAttribute('class', 'product-heading');

        p1.textContent = e.name;

        let pr = document.createElement('p');
        pr.setAttribute('class', 'current-price');
        pr.textContent = `$${e.price}`;

        div.append(img1, p1, pr);
        productDiv.append(div);

    });
}


function showToPage(e) {
    let sample = [];
    sample.push(e);
    console.log(e);
    localStorage.setItem("Item", JSON.stringify(sample));

     window.location.href = '../check_products/product.html';
}

updateCart();    
function updateCart() {
    let qty = localStorage.getItem('qty') | 0;    
    document.getElementById('btn-num').textContent = qty;
    if (qty === 0) {            
        document.getElementById('btn-num').style.display = "none";
    }
}