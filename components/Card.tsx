'use client'
import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => {
  return (
    <div className="md max-w-[544px] p-4 transition-transform duration-500 hover:-translate-y-1 md:w-1/2">
      <div className={`${imgSrc && 'h-full'}  card overflow-hidden`}>
        {imgSrc &&
          (href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              <Image
                alt={title}
                src={imgSrc}
                className="object-cover object-center md:h-36 lg:h-48"
                width={544}
                height={406}
              />
            </Link>
          ) : (
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={406}
            />
          ))}
        <div className="p-6">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight text-black dark:text-white">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
          {href && (
            <Link
              href={href}
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Link to ${title}`}
            >
              {'Read more'} &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
