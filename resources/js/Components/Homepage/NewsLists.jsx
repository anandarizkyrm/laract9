import { formatTime, randomBadgeColor } from '@/utils/jsHelper';

const noNews = () => {
  return (
    <div className="text-center">
      <h6 className="font-bold">
        Postingan kalian akan muncul disini.
      </h6>
      <i className="text-sm">Pastikan daftar akun dari sekarang</i>
    </div>
  )
}

const isNews = (datas) => {
  return datas.map((data, i) => {
    // postTime
    return (
      <div key={i} className="card w-full sm:w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{data.title} <div className={`badge ${randomBadgeColor()}`}>{data.category}</div></h2>
          <p className='text-sm'>{data.description}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-inline text-xs">{formatTime(data.updated_at)}</div>
            <div className="badge badge-outline">{data.author}</div>
          </div>
        </div>
      </div>
    )
  }
  )
}

export default function NewsLists({ news }) {
  if (!news || !news.length) return noNews()
  return isNews(news)
}