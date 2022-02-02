const db = require('./connection');
const { User, Product, Category } = require('../models');
db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Air Tools' },
        { name: 'Power Tools' },
        { name: 'Hand Tools' }
    ]);

    console.log('categories seeded');
    const products = await Product.insertMany([
        {
            name: 'Air Compressor',
            description:
                'A tool used for various tasks, ranging from tire inflation, pressure washing, to construction and agriculture.',
            image: 'aircompressor.png',
            category: categories[0]._id,
            price: 99.99,
            quantity: 100
        },
        {
            name: 'Nail Gun',
            description:
                'A tool used mainly for construction or building projects, a nail gun is used to quickly insert in a nail without the use of a hammer.',
            image: 'nailgun.png',
            category: categories[0]._id,
            price: 44.99,
            quantity: 150
        },
        {
            name: 'Drill',
            description:
                'A drill can be used for construction or everyday use, they are commonly used to quickly put screws into wood or other surfaces.',
            image: 'drill.png',
            category: categories[1]._id,
            price: 34.99,
            quantity: 150
        },
        {
            name: 'Circular Saw',
            description:
                'A circular saw is mainly used to cut straight lines on pieces of lumber.',
            image: 'circularsaw.png',
            category: categories[1]._id,
            price: 29.99,
            quantity: 150
        },
        {
            name: 'Reciprocating Saw',
            description:
                'A Reciprocating Saw is a handheld saw commonly used for demolition and remodeling. You can use it to cut through many types of materials such as wood, metal, PVC and nails.',
            image: 'reciprocatingsaw.png',
            category: categories[1]._id,
            price: 34.99,
            quantity: 150
        },
        {
            name: 'Angle Grinder',
            description:
                'An angle grinder is a handheld power tool that can be used for a variety of metal fabrication jobs that include cutting, grinding, deburring, finishing and polishing. The most common types of angle grinders are powered by electricity; either corded or battery powered.',
            image: 'anglegrinder.png',
            category: categories[1]._id,
            price: 29.99,
            quantity: 150
        },
        {
            name: 'Hammer',
            description:
                'A hammer is one of the most basic tools, they are used both to put nails into and remove them from surfaces like wallls or planks of wood.',
            image: 'hammer.png',
            category: categories[2]._id,
            price: 19.99,
            quantity: 200
        },
        {
            name: 'Pliers Set',
            description:
                'Pliers have many such as to grip small objects, reach awkward places, holding wires, bend loops, and attach wires.',
            image: 'pliersset.png',
            category: categories[2]._id,
            price: 19.99,
            quantity: 150
        },
        {
            name: 'Wrench Set',
            description:
                'Wrenches are made in various shapes and sizes and are used for gripping, fastening, turning, tightening and loosening things like pipes, pipe fittings, nuts and bolts.',
            image: 'wrenchset.png',
            category: categories[2]._id,
            price: 29.99,
            quantity: 150
        },
        {
            name: 'Ratchet Set',
            description:
                'A ratcheting socket wrench – commonly known as a ratchet – is a mechanical tool that tightens and loosens nuts and bolts more efficiently than other wrenches. Ratchets attach to different sized sockets, making them a versatile tool for your toolbox.',
            image: 'ratchetset.png',
            category: categories[2]._id,
            price: 24.99,
            quantity: 150
        },
        {
            name: 'Screwdriver Set',
            description:
                'A screwdriver, tool, usually hand-operated, for turning screws with slotted heads. For screws with one straight diametral slot cut across the head, standard screwdrivers with flat blade tips and in a variety of sizes are used.',
            image: 'screwdriverset.png',
            category: categories[2]._id,
            price: 19.99,
            quantity: 150
        }
    ]);

    console.log('products seeded');
    await User.deleteMany();

    await User.create({
        firstName: 'Abe',
        lastName: 'Welsh',
        email: 'honestabe@testmail.com',
        password: 'password12345',
        orders: [
            {
                products: [products[0]._id, products[0]._id, products[1]._id]
            }
        ]
    });

    await User.create({
        firstName: 'Gary',
        lastName: 'Snail',
        email: 'Ggarythesnail@testmail.com',
        password: 'password12345'
    });

    console.log('users seeded');

    process.exit();
});