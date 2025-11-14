import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className='py-20'>
      <CraftedWithPurpose />
      <Philosophy />
      <Sustainability />
      <RedefineSpace />
    </main>
  );
}

function CraftedWithPurpose() {
  return (
    <section className='w-full py-20 md:py-32 bg-secondary'>
      <div className='max-w-6xl mx-auto px-6 md:px-8'>
        <div className='grid md:grid-cols-2 gap-12 md:gap-16 items-center'>
          {/* Content */}
          <div className='space-y-6'>
            <h2 className='text-4xl md:text-5xl font-bold leading-tight text-dark'>Crafted with Purpose</h2>

            <p className='text-lg text-dark leading-relaxed'>
              {`Every piece in our collection is born from a commitment to exceptional craftsmanship. We collaborate with
              skilled artisans who understand that furniture is more than function—it's an expression of care and
              intention.`}
            </p>

            <p className='text-lg text-dark leading-relaxed'>
              From hand-selected materials to meticulous construction, we ensure that each item carries the warmth of
              human touch and the precision of expert hands.
            </p>
          </div>

          {/* Image */}
          <div className='relative h-96 md:h-full rounded-lg overflow-hidden'>
            <Image
              src='/images/about/artisan-craftsman-working-with-wood-furniture.jpg'
              alt='Artisan crafting furniture'
              className='w-full h-full object-cover'
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  const principles = [
    {
      title: 'Modern Minimalism',
      description: 'Clean lines and purposeful design that celebrates simplicity without sacrificing comfort.',
    },
    {
      title: 'Intentional Design',
      description: 'Every element serves a purpose, creating spaces that feel calm, organized, and deeply personal.',
    },
    {
      title: 'Emotional Connection',
      description: 'We design spaces that resonate with your lifestyle, creating environments where memories are made.',
    },
  ];

  return (
    <section className='w-full py-20 md:py-32 bg-meta'>
      <div className='max-w-6xl mx-auto px-6 md:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight'>Our Philosophy</h2>
          <p className='text-lg text-dark max-w-2xl mx-auto leading-relaxed'>
            We believe that your space should reflect who you are. Our design philosophy centers on creating furniture
            that balances aesthetic beauty with functional excellence.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {principles.map((principle, index) => (
            <div key={index} className='space-y-4'>
              <h3 className='text-2xl font-semibold text-dark'>{principle.title}</h3>
              <p className='text-dark leading-relaxed'>{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RedefineSpace() {
  return (
    <section className='w-full py-20 md:py-32 bg-meta'>
      <div className='max-w-6xl mx-auto px-6 md:px-8'>
        <div className='text-center space-y-8'>
          <h2 className='text-4xl md:text-5xl font-bold text-dark leading-tight'>Redefine Your Space</h2>

          <p className='text-lg text-dark max-w-2xl mx-auto leading-relaxed'>
            {`Your home is a canvas for self-expression. Whether you're creating a serene sanctuary or a vibrant gathering
            space, FurniDecor provides the pieces to bring your vision to life.`}
          </p>

          {/* Featured image */}
          <div className='relative h-96 md:h-[500px] rounded-lg overflow-hidden my-12'>
            <Image
              src='/images/about/modern-living-room-with-minimalist-furniture-and-n.jpg'
              alt='Modern living space with FurniDecor furniture'
              className='w-full h-full object-cover'
              fill
            />
          </div>

          <Link
            href='/shop'
            className='inline-flex items-center gap-2 font-medium text-white bg-green py-3 px-6 rounded-md ease-out duration-200 hover:bg-green-dark'
          >
            Explore Our Collection
          </Link>
        </div>
      </div>
    </section>
  );
}

function Sustainability() {
  return (
    <section className='w-full py-20 md:py-32'>
      <div className='max-w-6xl mx-auto px-6 md:px-8'>
        <div className='grid md:grid-cols-2 gap-12 md:gap-16 items-center'>
          {/* Image */}
          <div className='relative h-96 md:h-full rounded-lg overflow-hidden order-2 md:order-1'>
            <Image
              src='/images/about/sustainable-eco-friendly-materials-natural-texture.jpg'
              alt='Sustainable materials and production'
              className='w-full h-full object-cover'
              fill
            />
          </div>

          {/* Content */}
          <div className='space-y-6 order-1 md:order-2'>
            <h2 className='text-4xl md:text-5xl font-bold text-dark leading-tight'>
              Thoughtfully Curated. Sustainably Made.
            </h2>

            <p className='text-lg text-dark leading-relaxed'>
              {` Sustainability isn't an afterthought—it's woven into every decision we make. We source materials
              responsibly, partner with ethical manufacturers, and design pieces built to last generations.
           `}
            </p>

            <div className='space-y-4 pt-4'>
              <div className='flex gap-4'>
                <div className='flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-green text-sm font-bold'>
                  ✓
                </div>
                <p className='text-dark'>Responsibly sourced materials from certified suppliers</p>
              </div>
              <div className='flex gap-4'>
                <div className='flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-green text-sm font-bold'>
                  ✓
                </div>
                <p className='text-dark'>Durable construction designed to withstand time</p>
              </div>
              <div className='flex gap-4'>
                <div className='flex-shrink-0 w-6 h-6 rounded-full  flex items-center justify-center text-green text-sm font-bold'>
                  ✓
                </div>
                <p className='text-dark'>Ethical production practices and fair labor standards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
