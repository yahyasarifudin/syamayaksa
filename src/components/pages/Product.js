import React, {useEffect} from 'react';
import '../../App.css';
import Carditem from '../Carditem';




function Product(){

	useEffect(() => {
		window.scrollTo(0, 0)
	  }, [])
	  
	return (
			<>
				<div>
					<div className="cards__container">
						<div className="cards__wrapper">
							<ul className='cards__items'>
								<Carditem 
									src='../images/img-simrs.jpg' 
									text='Sistem Informasi Manajemen Rumah Sakit' 
									label='Simrs' 
									path='/services'/>
								 <Carditem
						              src='../images/img-siakad.jpg'
						              text='Sistem Informasi Akademik Universitas/Sekolah'
						              label='Siakad'
						              path='/services'
						            />
								</ul>
								 <ul className='cards__items'>
					            <Carditem
					              src='../images/img-ecommerce.jpg'
					              text='Sistem Informasi Manajemen Penjualan UMKM'
					              label='E-Commerce'
					              path='/services'
					            />
					            <Carditem
					              src='../images/img-kasir.jpg'
					              text='Sistem Informasi Manajemen Kasir'
					              label='Sikasir'
					              path='/products'
					            />
					            <Carditem
					              src='../images/img-company.jpg'
					              text="Professional Web profil terkait produk dan layanan perusahaan"
					              label='Company Profile'
					              path='/sign-up'
					            />
					          </ul>
						</div>
					</div>
			</div>
			</>
		);
}

export default Product;