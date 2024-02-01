import {Link} from "react-router-dom"

export default function TaskCard({ props }) {
  return (
    <Link href={"/tasks/" + props.key} className="text-decoration-none">
        <div className="bg-light">
            <div className="card mt-3 shadow-sm">
                <div className="card-body">{props.title}</div>
            </div>
        </div>
    </Link>
  )
}
