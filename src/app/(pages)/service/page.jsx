import Services from '@/app/components/services/services'
import NavBar from '@/app/components/shared/Navbar'
import MaxWidthWrapper from '@/app/lib/MaxWidthWrapper'


const Service = () => {
    return (
        <main>
            < NavBar />
            <MaxWidthWrapper>
                <Services />
            </MaxWidthWrapper>
        </main >
    )
}

export default Service