import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

interface EnquiryDialogProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
  productDetails?: string;
}

export function EnquiryDialog({
  isOpen,
  onClose,
  productName,
  productDetails,
}: EnquiryDialogProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    wireType: productName || '',
    message: productDetails || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    alert('Thank you for your enquiry! We will contact you soon.');
    onClose();
    setFormData({
      name: '',
      phone: '',
      email: '',
      wireType: '',
      message: '',
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="bg-[#1A1A1A] text-white p-4 flex items-center justify-between rounded-t-lg">
          <h2>Product Enquiry</h2>
          <button
            onClick={onClose}
            className="hover:bg-white/10 rounded p-1 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Enter your name"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              placeholder="+91-XXXX-XXXXXX"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="your@email.com"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="wireType">Wire Type Required *</Label>
            <Select
              value={formData.wireType}
              onValueChange={(value) =>
                setFormData({ ...formData, wireType: value })
              }
              required
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select wire type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Single Core FR Copper Wire">
                  Single Core FR Copper Wire
                </SelectItem>
                <SelectItem value="Multi Core Copper Wire">
                  Multi Core Copper Wire
                </SelectItem>
                <SelectItem value="Flexible Copper Wire">
                  Flexible Copper Wire
                </SelectItem>
                <SelectItem value="Aluminium Wire">Aluminium Wire</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message">Message / Requirements</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Please specify size, length, color, and quantity required..."
              rows={4}
              className="mt-1"
            />
          </div>

          <div className="flex gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-[#FFD600] text-black hover:bg-[#FF6B35] hover:text-white"
            >
              Submit Enquiry
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
