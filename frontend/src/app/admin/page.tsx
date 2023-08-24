import Container from "@/components/Container";
import ProductTable from "@/components/ProductTable";
import Sidebar from "@/components/Sidebar";

const Admin = async () => {

    return (
        <section>
            {/* sidebar */}
            <Sidebar />

            {/* rest content */}
            <div className="min-h-screen bg-neutral-50 lg:ml-64 pt-[80px] pb-16 pl-0 lg:pl-4 relative">
                <Container>
                    <div className="grid gap-8 mt-1">
                        {/* page title */}
                        <h1 className="text-3xl font-bold text-indigo-500">
                            All Product
                        </h1>
                        {/* product table */}
                        <ProductTable />
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default Admin;