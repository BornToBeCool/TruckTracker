import { cargoList } from '../DB/data';

export default function TrackTable() {
  return (
    <table className='table mt-5'>
      <thead>
        <tr>
          <th scope='col'>Id</th>
          <th scope='col'>Name</th>
          <th scope='col'>Status</th>
          <th scope='col'>Destination</th>
          <th scope='col'>Origin</th>
          <th scope='col'>Departure Date</th>
        </tr>
      </thead>
      <tbody>
        {cargoList.map((el, index) => {
          return (
            <tr>
              <th scope='row'>{el.id.slice(-1)}</th>
              <td>{el.name}</td>
              <td>{el.status}</td>
              <td>{el.origin}</td>
              <td>{el.destination}</td>
              <td>{el.departureDate}</td>
              <td>
                <button>Update</button>
              </td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

{
  /* <tr>

<tr>
<th scope='row'>2</th>
<td>Jacob</td>
<td>Thornton</td>
<td>@fat</td>
</tr>
<tr>
<th scope='row'>3</th>
<td>Larry</td>
<td>the Bird</td>
<td>@twitter</td>
</tr> */
}
