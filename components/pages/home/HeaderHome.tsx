'use client'
import { modalStore } from "@/stores/modalStore"

const HeaderHome = () => {
    return (
        <header className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Дошка емоцій</h1>
            <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
                onClick={() => modalStore.open()}>
                Додати емоцію
            </button>
        </header>
    )
}

export default HeaderHome