import React from 'react';
import ReactDomClient from 'react-dom/client';

import IntranetCFrame from '../src/index';

ReactDomClient
	.createRoot(document.getElementById('app'))
	.render(
		<IntranetCFrame breadcrumb={[{ text: 'App', link: '#' }, { text: 'Page' }]}>
			<h1>Header</h1>

			<div className='row'>
				<div className='col-9'>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus molestie magna non ipsum molestie ornare. Ut non quam elit. Morbi posuere nibh non dictum blandit. Mauris nibh eros, scelerisque sit amet arcu eget, maximus rhoncus tellus. Mauris ullamcorper scelerisque est ut sagittis. Maecenas vel imperdiet turpis. Aliquam gravida risus in risus rhoncus lobortis.</p>

					<p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque justo elit, efficitur mollis elit ac, ullamcorper lobortis arcu. Morbi pulvinar purus sit amet enim dapibus semper. Donec nec facilisis ante. Praesent at ullamcorper urna, eu blandit magna. Sed ultricies, elit sed molestie aliquet, quam lacus malesuada sapien, congue sollicitudin ante neque vel velit. Donec fringilla velit nec hendrerit bibendum. Etiam libero erat, convallis tempus ullamcorper sit amet, suscipit et libero. Aliquam finibus, magna non dapibus tempus, est turpis maximus nisi, at bibendum urna dolor a nulla. Nunc in diam eros. Cras mattis quam at risus suscipit feugiat. Nunc blandit, nibh ac pharetra scelerisque, ipsum nibh gravida nulla, vitae dapibus nisi lorem ut justo. Vivamus eros felis, rhoncus facilisis arcu in, sodales tempor urna. Vivamus aliquam, tortor ut ullamcorper euismod, massa erat posuere enim, nec suscipit ligula nisi vel lectus. Sed ac tortor nunc. Donec sed ipsum eget velit semper venenatis.</p>

					<p>Nunc non eros vitae augue dapibus dictum hendrerit eget dolor. Aenean varius sit amet augue sed vulputate. In porttitor arcu ut libero vestibulum, at mattis est porta. Nulla interdum dignissim nunc eu ultrices. Donec in mauris eleifend, tincidunt risus vitae, auctor orci. Sed blandit felis sit amet mi scelerisque, semper auctor urna semper. Nullam condimentum nibh ac faucibus ultrices. Proin consectetur massa non metus luctus hendrerit. Sed interdum odio quam, nec pretium mi convallis sit amet. Fusce in neque eleifend, commodo neque in, iaculis tellus. Nulla lacinia consequat aliquet. Duis pellentesque, diam quis bibendum varius, ligula felis facilisis felis, id pretium tellus leo eget nisi.</p>

					<p>Nullam sed tellus porttitor, dapibus lectus ut, volutpat sem. Donec quis orci gravida, tempus velit quis, aliquam dolor. Ut semper, justo nec ultrices aliquam, felis arcu mattis purus, eu fringilla est elit lacinia turpis. Nunc finibus accumsan elementum. Vivamus eu sem eu arcu bibendum sodales. Mauris vel convallis leo. Mauris lacinia erat eu hendrerit tempus. Vestibulum mattis turpis non dolor interdum suscipit. Maecenas sit amet ligula metus. Nulla facilisis arcu ligula, ac consequat augue pellentesque quis.</p>

					<p>Fusce eleifend posuere semper. Sed elit leo, convallis et iaculis ut, iaculis id felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer placerat eu sem sit amet vulputate. Nulla in magna ac ante consectetur facilisis sit amet sed sem. Aliquam vestibulum diam tristique, dictum neque vel, pellentesque nunc. Suspendisse tincidunt quam est, quis gravida felis consequat ut. Sed vel augue tellus. Etiam vel nisi dolor. Proin sit amet elit nisl. Suspendisse potenti. Nullam tempus et risus vitae blandit. Praesent convallis, erat sed luctus facilisis, lorem eros dapibus purus, ac aliquam urna nunc sit amet lorem. Morbi a interdum dui.</p>
				</div>

				<div className='col-3'>
					<ul>
						<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
						<li>Phasellus ullamcorper ex ac lorem vulputate, ut lobortis erat consectetur.</li>
						<li>Cras ornare leo vitae euismod volutpat.</li>
						<li>Vivamus sed lacus ultrices erat fermentum pharetra in sit amet risus.</li>
						<li>Nullam et mauris quis metus varius finibus in vulputate leo.</li>
						<li>Maecenas malesuada erat sit amet eros ornare, nec laoreet augue auctor.</li>
						<li>Aenean ac magna ornare sem venenatis tempor nec quis metus.</li>
						<li>Curabitur fermentum eros vel sem feugiat tempus.</li>
						<li>Suspendisse semper felis ac nunc sagittis, ut rhoncus justo dignissim.</li>
						<li>Sed ac sem tincidunt, consequat dolor sit amet, bibendum est.</li>
						<li>Duis vitae elit feugiat, varius magna sit amet, aliquet mauris.</li>
					</ul>
				</div>
			</div>
		</IntranetCFrame>
	);
