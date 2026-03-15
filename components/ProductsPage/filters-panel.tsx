import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Button } from '../ui/button'

interface filtersPanelProps {
  priceRange: number[]
  setPriceRange: (priceRange: number[]) => void
  selectedCategories: string[]
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>
  showNewOnly: boolean
  setShowNewOnly: (value: boolean) => void
}

const categories = ['headphones', 'speakers', 'earphones']

export default function FiltersPanel({
  priceRange,
  setPriceRange,
  selectedCategories,
  setShowNewOnly,
  showNewOnly,
  setSelectedCategories,
}: filtersPanelProps) {
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  return (
    <aside className="lg:col-span-1 relative">
      <div className="sticky top-60 space-y-8 rounded-lg border border-zinc-200 bg-white p-6">
        <div>
          <h3 className="mb-4 text-lg font-bold uppercase text-black">Filters</h3>
        </div>

        <div>
          <Label className="mb-4 block text-sm font-bold text-black">Price Range</Label>
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={5000}
            step={100}
            className="mb-2"
          />
          <div className="flex justify-between text-sm text-zinc-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>

        <div>
          <Label className="mb-4 block text-sm font-bold text-black">Category</Label>
          <div className="space-y-3">
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={category}
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={() => toggleCategory(category)}
                />
                <Label
                  htmlFor={category}
                  className="cursor-pointer text-sm text-zinc-700 capitalize"
                >
                  {category}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* New Products Only */}
        <div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="new-only"
              checked={showNewOnly}
              onCheckedChange={(checked) => setShowNewOnly(checked as boolean)}
            />
            <Label htmlFor="new-only" className="cursor-pointer text-sm font-bold text-black">
              New Products Only
            </Label>
          </div>
        </div>

        {/* Clear Filters */}
        <Button
          className="w-full"
          onClick={() => {
            setPriceRange([0, 5000])
            setSelectedCategories([])
            setShowNewOnly(false)
          }}
        >
          Clear Filters
        </Button>
      </div>
    </aside>
  )
}
